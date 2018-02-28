import React from 'react'
import { Link } from 'react-router-dom'

class Top extends React {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
        </ul>
        { this.props.children }
      </div>
    )
  }
}

class About extends React {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <h3>About</h3>
    )
  }
}

class Inbox extends React {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

class Message extends React {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <h3>Message {this.props.params.id}</h3>
    )
  }
}

export default {
  Top,
  About,
  Inbox,
  Message
}
