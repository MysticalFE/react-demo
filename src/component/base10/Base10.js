import React from 'react'
//PropTypes,对类型进行检查判断
import PropTypes from 'prop-types'

class Greeting1 extends React.Component {
  constructor(props) {
    console.log(props);
    super(props)
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <h1>Hello, { this.props.name }</h1>
    )
  }
}
Greeting1.propTypes = {
  name: PropTypes.string
}
function Greeting () {
  return (
    <Greeting1 name="111"/>
  )
}
export default Greeting
