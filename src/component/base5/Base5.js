import React, { Component } from 'react'
//单纯的使用条件渲染无状态组件
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


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return (
      <UserGreeting />
    )
  }
  return (
    <GuestGreeting />
  )
}

//使用元素变量，以有状态的组件控制无状态的组件
function LoginButton (props) {
  return (
    <button onClick={ props.onClick }> Login </button>
  )
}

function LoginOutButton (props) {
  return (
    <button onClick={ props.onClick }> Login Out</button>
  )
}

//如果不想组件被渲染，阻止组件被渲染，让 render 方法返回 null,return null
function IsShowComponent (props) {
  if (!props.isShow) {
    return null
  }
  return (
    <h1>我被显示了</h1>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLoginoutClick = this.handleLoginoutClick.bind(this)
    this.state = {
      isLoggedIn: false
    }
  }
  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    })
  }
  handleLoginoutClick() {
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button = null
    if (isLoggedIn) {
      button = <LoginOutButton onClick = { this.handleLoginoutClick } />
    } else {
      button = <LoginButton onClick = { this.handleLoginClick } />
    }
    return (
      <div>
        <IsShowComponent isShow={ isLoggedIn }/>
        { button }
        <Greeting isLoggedIn={ isLoggedIn } />
      </div>
    )
  }
}

export default LoginControl
