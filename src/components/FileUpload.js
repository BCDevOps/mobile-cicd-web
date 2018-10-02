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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FileUpload.css';

class FileUpload extends Component {
  onDrop = async (acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach(element => {
      this.props.addFile(element);
    });
    this.setState({ barf: 123 });
    console.log('xxx', this.state);
  };

  size = sizeInBytes => {
    return (
      <div>
        &nbsp;&nbsp;
        {Math.round(sizeInBytes * 0.000001)}
        Mb
      </div>
    );
  };

  isDisabled = () => {
    if (this.props.files.length >= 1) return true;
    return false;
  };

  titleForCurrentState = () => {
    if (this.isDisabled()) {
      return <div className="title">Only one file can be selected.</div>;
    }

    return <div className="title">Drag file to upload.</div>;
  };

  subTitleForCurrentState = () => {
    if (this.isDisabled()) {
      return <div className="sub-title" />;
    }

    return <div className="sub-title">(.ZIP format only)</div>;
  };

  render() {
    return (
      <div className="file-upload-container">
        <Dropzone
          className="drop-zone"
          onDrop={files => this.onDrop(files)}
          disabled={this.isDisabled()}
        >
          {this.titleForCurrentState()}
          {this.subTitleForCurrentState()}
        </Dropzone>
        <ul className="file-list">
          {this.props.files.map(t => (
            <li key={t.name}>
              {<FontAwesomeIcon icon="file" className="file-icon" />}
              <span className="file-name">{t.name}</span>
              <span className="file-size">{this.size(t.size)}</span>
            </li>
          ))}
        </ul>
      </div>
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
