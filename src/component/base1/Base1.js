import React, { Component } from 'react';

//函数式定义组件
//组件的返回值只能有一个根元素
function FuncComponent (props) {
  return <h1>Hello, { props.name }</h1>
}

function FuncGroup () {
  return (
    <div>
      <FuncComponent name="Peter"/>
      <FuncComponent name="Jack"/>
      <FuncComponent name="Pull"/>
    </div>
  )
}
//class定义类，React组件类
// class FuncComponent extends React.Component {
//   render() {
//     return <h1>Hello, { this.props.name }</h1>
//   }
// }
export default FuncGroup
