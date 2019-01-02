import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Menu from '../menu/menu';
import Header from '../header/header';
import Footer from '../footer/footer';
import Dashboard from '../dashboard/dashboard';

import * as HeaderActions from './../header/actions';
import * as MenuActions from './../menu/actions';

const mapStateToProps = state => {
  return {
    isToggled: state.toggleNav.isToggled,
    roles: state.roles
  }
}

const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(HeaderActions.toggleNav()),
  fetchRoles: () => { dispatch(MenuActions.fetchRoles())},
});


class Main extends Component {

  componentDidMount() {
    this.props.fetchRoles();
  }

  render () {
    return(
      <div id="wrapper" className={this.props.isToggled ? 'toggled': null}>
        <Menu isLoading={this.props.roles.isLoading}
          errMess={this.props.roles.errMess}
          roles={this.props.roles}
            />
        <div id="page-content-wrapper">
          <Header toggleNav={this.props.toggleNav}/>
          <Dashboard />
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);