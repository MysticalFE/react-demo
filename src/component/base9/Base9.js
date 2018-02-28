import React from 'react'
import './Base9.css'

//组件的包含关系，props.children children是默认属性
function FancyBorder (props) {
  console.log(props);
  return (
    <div className="FancyBorder">
      { props.children }
    </div>
  )
}

function Dialog () {
  return(
    <FancyBorder>
      <h1>Hello</h1>
    </FancyBorder>
  )
}

//还可以自定义属性传递，比如<FancyBorder left={<component />}></FancyBorder>  props.left
function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
export default SideBar
