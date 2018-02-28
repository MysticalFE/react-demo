import React, { Component } from 'react'

//如果把包含key的组件提取出来，这里不需要指定key值
function ListItem (props) {
  return (
    <li>{ props.value }</li>
  )
}
function ListRender (props) {
  const nums = [1,2,3,4,5]
  const listItems = nums.map(number =>
    //key值在这里指定才能指出上下文的兄弟节点
    <ListItem key={ number.toString() } value={ number } />
  )
  return (
    <ul>{ listItems }</ul>
  )
}

export default ListRender
