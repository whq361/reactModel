import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const className = 'Home';

    return (
      <div className={`${className}`}>
        <h1>首页</h1>
        <div><Link to={'/wechat/home'}>Manage Home</Link></div>
      </div>
    );
  }
}

export default Home;