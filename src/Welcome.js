import React from 'react'

class Welcome extends React.Component {
  render() {
    const isLogin = true
    const test = <h1>hello React</h1>
    return (
      <div className="this" htmlFor="">
      <h1>Hello React</h1>
      { isLogin ? <p>你已登录</p> : <p>请登录</p>}
      </div>
    )
  }
}
export default Welcome
