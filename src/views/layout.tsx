
import React, { Component } from 'react';
import { Layout, BackTop } from 'antd';
// import Nav from '../components/nav/nav';
const { Content, Footer, Sider } = Layout;

class Layouts extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      // isShowSlider: false,
      // isIndexPage: false,
    };
  }

  render() {
  
    return (
      <div className="Layouts">
            {/* <Nav pathname="/" /> */}
      </div>
    );
  }
}

export default Layouts;
