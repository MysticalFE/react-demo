import React from 'react'

//状态提升 将state共享状态提升到离需要这些数据组件最近的父组件
/**
 * 组件TemperatureInput需要temperature 和 unit数据
 * 可由父组件Calculator管理状态state,将temperature 和 unit数据 作为状态属性props传递给子组件TemperatureInput
 */
function BoilingVerdict (props) {
  if (props.celsius && props.celsius >= 100) {
    return (
      <p>水会烧开</p>
    )
  }
  return (
    <p>水不会烧开</p>
  )
}
//华氏转摄氏
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
//摄氏转华氏
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if(Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

const units = {
  c: '摄氏度',
  f: '华氏摄氏度'
}

class TemperatureInput  extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    const temperature = this.props.temperature
    const unit = this.props.unit
    return (
      <fieldset>
        <legend>输入一个{units[unit]}</legend>
        <input
          value={temperature}
          onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = {
      temperature: '',
      unit: 'c'
    }
  }
  handleCelsiusChange(temperature) {
    this.setState({
      unit: 'c',
      temperature
    })
  }
  handleFahrenheitChange(temperature) {
    this.setState({
      unit: 'f',
      temperature
    })
  }
  render(){
    const unit = this.state.unit
    const temperature = this.state.temperature
    const celsius = unit === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = unit === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput unit="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput unit="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    )
  }
}

export default Calculator

/**
 * parseFloat
 parseFloat() 函数可解析一个字符串，并返回一个浮点数。
该函数指定字符串中的首个字符是否是数字。如果是，则对字符串进行解析，直到到达数字的末端为止，然后以数字返回该数字，而不是作为字符串。
 */
