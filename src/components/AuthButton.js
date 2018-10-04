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
// Created by Jason Leach on 2018-10-03.
//

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import implicitAuthManager from '../auth';
import './AuthButton.css';

class AuthButton extends Component {
  titleForAuthenticationState = state => {
    if (state.authenticated) {
      return 'Logout';
    }

    return 'Login';
  };

  locationForCurrentState = state => {
    if (state.authenticated) {
      return implicitAuthManager.getSSOLogoutURI();
    }

    return implicitAuthManager.getSSOLoginURI();
  };

  render() {
    return (
      <span className="boo">
        <button
          className="auth-button"
          onClick={() => {
            window.location = implicitAuthManager.getSSOLoginURI();
          }}
        >
          {this.titleForAuthenticationState(this.props.authentication)}
        </button>
      </span>
    );
  }
}

function mapStateToProps(state) {
  return { authentication: state.authentication };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
