import {createElement, render, Component} from "./toy-react";


class MyComponent extends Component {
    constructor() {
        super();
        this.states = {
            a: 1,
            b: 2
        }
    }

    render() {
        return <div>
            <h1>my component</h1>
            <button onClick={() => {
                this.states.a++;
                this.rerender();
            }}>hello kevin</button>
            <span>{this.states.a.toString()}</span>
            <h1>1234</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
        <div>hello</div>
        <div>world</div>
    </MyComponent>
    , document.body);
// 给原生的对象加一个wrapper函数 使其能够appendchild一个自定义的对象


//render() 优化了document.body.appendChild()
// render(<div id="a" class="c">
//         <div>hello</div>
//         <div>world</div>
//         <div>!</div>
//         <h1>YJW</h1>
//     </div>
// ,document.body);

//上方代码等价于
// document.body.appendChild(createElement("div", {
//     id: "a",
//     "class": "c"
// }, createElement("div", null, "hello"), createElement("div", null, "world"),
// createElement("div", null, "!"), createElement("h1", null, "YJW")));
