// ./src/components/Counter.tsx
import * as React from "react";
// 引入connect，让组件和仓库建立连接
import { connect } from "react-redux";
// 引入actions，用于传给connect
import actions from "../store/action/counter";
// 引入接口约束
import { Store } from "../types";
// 接口约束
interface IProps{
  number:number,
  // add是一个函数
  add:any,
  // subtract是一个函数
  subtract:any
}
class CounterComponent extends React.Component<IProps>{
  render(){
    // 利用解构赋值取出
    // 这里比如和IProps保持一致，不对应则会报错，因为接口约束了必须这样
    let { number,add,subtract } = this.props
    return(
      <div>
        <p>{number}</p><br/>
        <button onClick={add}>+</button><br />
        <button onClick={subtract}>-</button>        
      </div>
    )
  }
}
// 这个connect需要执行两次，第二次需要我们把这个组件CounterComponent传进去
// connect第一次执行，需要两个参数，

// 需要传给connect的函数
let mapStateToProps = function (state:Store) {
  return state
}

export default connect(
  mapStateToProps,
  actions
)(CounterComponent);
