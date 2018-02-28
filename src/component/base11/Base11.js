import React from 'react'

//ref
//为 DOM 元素添加 Ref
class CustomTextInput1 extends React.Component {
  constructor(props) {
    super(props)
    this.focus = this.focus.bind(this)
  }
  focus() {
    this.textInput.focus()
  }
  render() {
    return (
      <div>
          <input type="text"
                 ref={(input) => { this.textInput = input }}/>
          <button onClick={this.focus}>点击聚焦输入框</button>
      </div>
    )
  }
}

//加载页面立即更新
class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    this.textInput.focus()
  }
  render() {
    return (
      <CustomTextInput ref={ input => { this.textInput = input } }/>
    )
  }
}

//不能在函数式组件上用ref
function MyFunctionalComponent() {
  return <input />;
}
class Parent1 extends React.Component {
  render() {
    // 这里 `ref` 无效！
    return (
      <MyFunctionalComponent
        ref={(input) => { this.textInput = input; }} />
    );
  }
}

//可以在函数式组件内部使用 ref，只要它指向一个 DOM 元素或者 class 组件
function CustomTextInput1(props) {
  // 这里必须声明 textInput，这样 ref 回调才可以引用它
  let textInput = null;
  function handleClick() {
    textInput.focus();
  }
  return (
    <div>
      <input
        type="text"
        ref={(input) => { textInput = input; }} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}

function CustomTextInput(props) {
  console.log(props);
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

function Parent(props) {
  return (
    <div>
      My input: <CustomTextInput inputRef={props.inputRef} />

    </div>
  );
}


class Grandparent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Parent
        inputRef={el => '111'}
      />
    );
  }
}

export default Grandparent
