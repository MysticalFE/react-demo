import React from 'react'

class Foo extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log('111');
  }
  render() {
    return <button onClick={ this.handleClick }>Click Me</button>
  }
}

export default Foo
