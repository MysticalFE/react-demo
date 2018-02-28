import React, { Component } from 'react'

//事件名称使用驼峰式
function ActionLink() {
  function handleClick(e) {
    console.log(e);
    e.preventDefault() //阻止默认事件，需使用preventDefault方法
    console.log("111")
  }
   return (
     <a href="http://www.baidu.com" onClick={ handleClick }>Click me</a>
   )
}

function UserGreeting(props) {
  return (
    <h1>Welcome back!</h1>
  )
}

function GuestGreeting(props) {
  return (
    <h1>Please sign up.</h1>
  )
}
//React绑定this的三种方式
class toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }
    //第一种:构造函数内部绑定
    this.handleClick = this.handleClick.bind(this)
    //第三种：箭头函数(或者在构造函数内部)
    // handleClick => (e) {
    //   this.setState(prevState => {
    //     isToggleOn: !prevState.isToggleOn
    //   })
    // }
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  //第三种：箭头函数(或者)
  // handleClick = (e) => {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }))
  // }
  render() {
    //条件渲染
    let greeting = null
    if (this.state.isToggleOn) {
      greeting = <UserGreeting />
    } else {
      greeting = <GuestGreeting />
    }

    return (
      //使用箭头函数在给事件传递参数的时候，事件对象e将会显式的被当做第二个参数传递
      //使用bind的方式，参数被隐式传递，事件对象e排在所传递参数后面
      //第二种：事件调用时绑定
      //<button onClick={ this.handleClick.bind(this,param) }>

      //第三种：箭头函数
      //<button onClick={ (e) => { this.handleClick(param,e) } }>
      <div>
        <button onClick={ this.handleClick }>
          { this.state.isToggleOn ? 'on' : 'off' }
        </button>
        { greeting }
      </div>

    )
  }
}

export default toggle
