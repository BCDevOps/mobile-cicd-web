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
import Dropzone from 'react-dropzone';
import { addFile } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './FileUpload.css';

class FileUpload extends Component {
  onDrop = async (acceptedFiles, rejectedFiles) => {
    console.log(this.props);
    console.log('Hello World', acceptedFiles);
    // const req = request.post('/upload');
    acceptedFiles.forEach(element => {
      console.log(`got file = ${element.name}`);
      this.props.addFile(element);
    });
  };

  render() {
    return (
      <Dropzone className="x" onDrop={files => this.onDrop(files)}>
        <div>Drop Your File Here, Yo!</div>
      </Dropzone>
    );
  }
}

function mapStateToProps(state) {
  return {
    files: state.files,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addFile,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload);
