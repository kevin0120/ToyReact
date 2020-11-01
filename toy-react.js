const RENDER_TO_DOM = Symbol("render to dom")


class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }

    setAttribute(name, value) {
        //属性中事件和静态属性的 处理是不一样的
        if (name.match(/^on([\s\S]+)/)){
            //以on开头的事件属性添加
            this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/,c =>c.toLowerCase()),value)
        }else {

            this.root.setAttribute(name, value)
        }

    }

    appendChild(component) {
        let range = document.createRange()
        range.setStart(this.root, this.root.childNodes.length);
        range.setEnd(this.root, this.root.childNodes.length);
        component[RENDER_TO_DOM](range)
        // this.root.appendChild(component.root)
    }

    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root)
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }

    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }
}

export class Component {
    constructor() {
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
    }

    setAttribute(name, value) {
        this.props[name] = value
    }

    appendChild(component) {
        this.children.push(component)
    }

    [RENDER_TO_DOM](range) {
        this._range =range
        this.render()[RENDER_TO_DOM](range)
    }

    // get root() {
    //     if (!this._root) {
    //         this._root = this.render().root;
    //     }
    //     return this._root
    // }


    rerender(){
        this._range.deleteContents();
        this[RENDER_TO_DOM](this._range)
    }

}

//render() 优化了document.body.appendChild()
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