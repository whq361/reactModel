import React, { Component } from 'react';
import Home from '../routes/home';
import WechatLayout from './WechatLayout';
import { Route, Switch } from 'react-router-dom';

/**
 * 项目入口布局
 * 在此处根据一级路由的不同进入不同的container
 * 每个container有自己不同的作用
 *
 * 在react-router V4中，将原先统一在一处的路由分散到各个模块中，分散到各个模块当中
 * 例如： WechatLayout的路由为/wechat 表示到该layout下的默认路径
 */
class AppLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/wechat' component={WechatLayout} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default AppLayout;