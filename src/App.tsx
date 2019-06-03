import * as React from "react";
import { DatePicker  } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import Counter from "./compent/counter"
import { Provider } from "react-redux";
import store from './store'
interface mystate{
  startValue?:any,
  endValue?:any,
  endOpen?:any
}
class App extends React.Component<mystate,any> {
  static defaultProps={
    startValue: "wode",
    endValue: "test",
    endOpen: false,
  }
  state:any= {
    startValue: null,
    endValue: null,
    endOpen: false,
  };
  disabledStartDate = (startValue:any) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = (endValue:any) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field:any, value:any) => {
    console.log(this.props.startValue)
    this.setState({
      [field]: value,
    });
  };

  onStartChange = (value:any) => {
    this.onChange('startValue', value);
  };

  onEndChange = (value:any) => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = (open:any) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = (open:any) => {
    this.setState({ endOpen: open });
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div style={{marginLeft:"50px"}}>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        <DatePicker
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
     <Provider store={store}>
    <Counter/>
  </Provider>
      </div>
    );
  }
}

export default App;