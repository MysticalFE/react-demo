import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Base1 from './component/base1/Base1'
import Base2 from './component/base2/Base2'
import Base3 from './component/base3/Base3'
import Base4 from './component/base4/Base4'
import Base5 from './component/base5/Base5'
import Base6 from './component/base6/Base6'
import Base7 from './component/base7/Base7'
import Base8 from './component/base8/Base8'
import Base9 from './component/base9/Base9'
import Base10 from './component/base10/Base10'
import Base11 from './component/base11/Base11'
import Base12 from './component/base12/Base12'
// import Base13 from './component/base13/Base13'
import registerServiceWorker from './registerServiceWorker';

function func(user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: 'James',
  lastName: 'Jack',
  avatarUrl: './logo.svg'
};
//在JSX代码的外面扩上一个小括号(),可以防止 分号自动插入 的bug
//React DOM 使用 camelCase 小驼峰命名 来定义属性的名称，而不是使用 HTML 的属性名称。 class => className   tab-index => tabIndex
const ele = (
  <div>
    <h1>
      Hello,{ func(user) }!
    </h1>
    <div tabIndex="0">tabIndex = 0</div>
    <img src={ user.avatarUrl } style={{ width: '15px', height: '15px'}} alt="" />
  </div>
)
//等同于上面JSX的写法
// const ele = React.createElement(
//   'h1',
//   {className: 'App-title'},
//   'Hello, world!'
// )
//当元素呗创建后，React元素是不可改变的,
function tick() {
  const ele1 = (
    <div>
      <h1>Hello, world!</h1>
      <h2>{new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(
    ele1,
    document.getElementById('root')
  );
}
// setInterval(tick, 1000)

//引入函数式组件
const ele2 = (
  <Base1 name="Jack" />
)
const comment = {
  date: new Date(),
  text: '123456789',
  author: {
    name: 'Jack',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

const ele3 = (
  <Base2
    date = { comment.date }
    text = { comment.text }
    author = { comment.author } />
)

const ele4 = (
  <Base3 />
)

const ele5 = (
  <Base4 />
)

const ele6 = (
  <Base5 isLoggedIn={ true }/>
)

const ele7 = (
  <Base6 />
)

const ele8 = (
  <Base7 />
)

const ele9 = (
  <Base8 />
)

const ele10 = (
  <Base9 />
)

const ele11 = (
  <Base10 />
)


const ele12 = (
  <Base11 />
)

const ele13 = (
  <Base12 />
)

// const ele14 = (
//   <Base13 />
// )

ReactDOM.render(
  ele13,
  document.getElementById('root')
)
registerServiceWorker();
