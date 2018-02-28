import React, { Component } from 'react'

function FormattedDate(props) {
  return <h2>{ props.date.toLocaleTimeString() }</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    //this.state的初始化，只能在构造函数constructor完成
    this.state = {
      date: new Date()
    }
  }
  //生命周期 挂载dom
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    },1000)
  }
  //销毁组件
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  //使用setState 来更新组件局部状态,实时获取当前时间点
  //this.setState((prevState, props) => ({
  // counter: prevState.counter + props.increment
  //}));
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>使用组件类及生命周期构建定时器</h1>
        <FormattedDate date = { this.state.date } />
      </div>
    )
  }
}

//组件之间是相互独立的
function APP() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}

export default APP
