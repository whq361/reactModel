import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <Router>
          <AppLayout />
        </Router>
      </Provider>
    );
  }
}

export default AppContainer;