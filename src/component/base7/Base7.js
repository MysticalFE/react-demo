import React, { Component } from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      value: ''
    }
  }
  handleSubmit(e) {
    e.persist()
    console.log(e);
    e.preventDefault()
  }
  handleInput(e) {
    e.persist() //目的：打印事件对象不为null;
    console.log(e);
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Name:
          <input type="text" value={ this.state.value } onChange={ this.handleInput }/>
        </label>
        <input type="submit" value="submit"/>
      </form>
    )
  }
}

//select下拉框
class FlavorForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: 'coconut'
    }
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    console.log(this.state.value);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          请选择：
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="111">111</option>
            <option value="222">222</option>
            <option value="333">333</option>
            <option value="444">444</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

//多个输入的解决
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    console.log(target);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    //此处理解不透彻
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
export default Reservation
