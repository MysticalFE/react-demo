import React, { Component } from 'react'
import logo from '../../logo.svg'

function formatDate(date) {
  return date.toLocaleDateString()
}
//头像组件
function Avatar(props) {
  return (
    <img className="Avatar"
      src={ props.user.avatarUrl }
      alt={ props.user.name }
    />
  )
}
//用户信息组件
function UserInfo (props) {
  return (
    <div className="UserInfo">
      <Avatar user={ props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user= {props.author} />
      <div className="Comment-text">
        { props.text }
      </div>
      <div className="Comment-date">
        { formatDate(props.date) }
      </div>
    </div>
  )
}

export default Comment
