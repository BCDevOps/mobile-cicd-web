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

import React from 'react';
import PropTypes from 'prop-types';
import AuthButton from '../AuthButton/AuthButton';
import logo from './gov3_bc_logo.png';
import './Header.css';

const Header = ({ authentication }) => {
  return (
    <header>
      <div className="banner">
        <a href="https://gov.bc.ca" alt="British Columbia">
          <img src={logo} alt="British Colombia" />
        </a>
        <h1>Secure Sign</h1>
      </div>
      <div className="other">
        <AuthButton isAuthenticated={authentication.isAuthenticated} />  
      </div>
    </header>
  );
};

Header.propTypes = {
  authentication: PropTypes.object.isRequired,
};

export default Header;
