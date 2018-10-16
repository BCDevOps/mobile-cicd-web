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
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FileUpload.css';

const size = sizeInBytes => {
  return (
    <div>
      &nbsp;&nbsp;
      {Math.round(sizeInBytes * 0.000001)}
      Mb
    </div>
  );
};

const isDisabled = files => {
  if (files.length >= 1) return true;
  return false;
};

const titleForCurrentState = files => {
  if (isDisabled(files)) {
    return <div className="title">Only one file can be selected.</div>;
  }

  return <div className="title">Drag file to upload.</div>;
};

const subTitleForCurrentState = files => {
  if (isDisabled(files)) {
    return <div className="sub-title" />;
  }

  return <div className="sub-title">(.ZIP format only)</div>;
};

const FileUpload = ({ onFileAccepted, files }) => {
  return (
    <div className="file-upload-container">
      <Dropzone className="drop-zone" onDrop={onFileAccepted} disabled={isDisabled(files)}>
        {titleForCurrentState(files)}
        {subTitleForCurrentState(files)}
      </Dropzone>
      <ul className="file-list">
        {files.map(file => (
          <li key={file.name}>
            {<FontAwesomeIcon icon="file" className="file-icon" />}
            <span className="file-name">{file.name}</span>
            <span className="file-size">{size(file.size)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

FileUpload.propTypes = {
  files: PropTypes.array.isRequired,
  onFileAccepted: PropTypes.func.isRequired,
};

export default FileUpload;
