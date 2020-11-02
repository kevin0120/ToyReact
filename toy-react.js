const RENDER_TO_DOM = Symbol("render to dom")


class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }

    setAttribute(name, value) {
        //属性中事件和静态属性的 处理是不一样的
        if (name.match(/^on([\s\S]+)/)) {
            //以on开头的事件属性添加
            this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()), value)
        } else {
            if (name === "className") {
                this.root.setAttribute("class", value)
            } else {
                this.root.setAttribute(name, value)
            }
        }

    }

    appendChild(component) {
        let range = document.createRange()
        range.setStart(this.root, this.root.childNodes.length);
        range.setEnd(this.root, this.root.childNodes.length);
        component[RENDER_TO_DOM](range)
        // this.root.appendChild(component.root)
    }


    //这个就是重新给document赋值的函数
    [RENDER_TO_DOM](range) {
        //如果仅仅是为了第一次加载那么这里可以不用先删在插，这样做是为了在更新时起作用！！！！
        range.deleteContents();
        range.insertNode(this.root)
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }

    //这个就是重新给document赋值的函数
    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }
}

export class Component {
    constructor() {
        this.props = Object.create(null);
        this.state = null;
        this.children = [];
        this._root = null;
    }

    setAttribute(name, value) {
        this.props[name] = value
    }

    appendChild(component) {
        this.children.push(component)
    }

    //这个就是重新给document赋值的函数一直其对递归调用
    //this.render()函数调用重新生成document
    //自定义component有几层就会调用几层
    [RENDER_TO_DOM](range) {
        this._range = range
        this.render()[RENDER_TO_DOM](range)
    }

    // get root() {
    //     if (!this._root) {
    //         this._root = this.render().root;
    //     }
    //     return this._root
    // }


    rerender() {
        //将旧的range保存下来
        let oldRange = this._range;
        //新建一个range,在旧的rang之前暂时为null
        let range = document.createRange();
        range.setStart(oldRange.startContainer, this._range.startOffset)
        range.setEnd(oldRange.startContainer, this._range.startOffset)

        //新rang有了更新的内容，旧rang变大了在前面包含了新rang！！！！！
        // Range.insertNode()在 Range 的起点处插入一个节点!!!!!!!
        this[RENDER_TO_DOM](range);

        //将旧rang缩小到正确的旧内容范围（以前包含新旧内容）
        oldRange.setStart(range.endContainer, range.endOffset);
        // 将旧内容删除
        oldRange.deleteContents();
        //会有问题 应该用上面的方法,保证不丢数据
        // this._range.deleteContents();
        // this[RENDER_TO_DOM](this._range)
    }


    setState(newState) {
        if (this.state === null || typeof this.state !== "object") {
            this.state = newState;
            this.rerender();
            return
        }
        let merge = (oldState, newState) => {
            for (let p in newState) {
                if (oldState[p] === null || typeof oldState[p] !== "object") {
                    oldState[p] = newState[p]
                } else {
                    merge(oldState[p], newState[p])
                }
            }
        }
        merge(this.state, newState)
        this.rerender();
    }

}

//render() 优化了document.body.appendChild
//只在main函数调用render函数时运行一次！！！！
export function render(component, parentElement) {
    let range = document.createRange()
    range.setStart(parentElement, 0);
    range.setEnd(parentElement, parentElement.childNodes.length)
    component[RENDER_TO_DOM](range)
    // parentElement.appendChild(component.root)
}

export function createElement(type, attributes, ...children) {
    let e
    if (typeof type === "string") {
        e = new ElementWrapper(type);
        // e = document.createElement(type);
    } else {
        e = new type
    }

    for (let p in attributes) {
        e.setAttribute(p, attributes[p]);
    }

    let insertChildren = (children) => {
        for (let child of children) {
            if (typeof child === "string") {
                child = new TextWrapper(child);
                // i = document.createTextNode(i);
            }

            //没有这行的话<div></div>
            if (child === null) {
                continue
            }
            if (typeof child === "object" && child instanceof Array) {
                insertChildren(child)
            } else {
                e.appendChild(child)
            }

        }
    }

    insertChildren(children)

    return e
}