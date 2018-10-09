//
// DevHub
//
// Copyright © 2018 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Jason Leach on 2018-09-04.
//

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthButton from './AuthButton';
import logo from './bcgovlogo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} className="header-logo" alt="logo" />
        <p className="header-title">Secure Sign</p>
        <div className="right-push">
          <AuthButton isAuthenticated={this.props.isAuthenticated} />
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { isAuthenticated: state.authentication.isAuthenticated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
