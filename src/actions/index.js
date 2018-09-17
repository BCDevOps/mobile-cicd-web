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
// Created by Jason Leach on 2018-08-24.
//

export const ADD_FILE = 'ADD_FILE';
export const UPLOAD_STARTED = 'UPLOAD_STARTED';
export const UPLOAD_COMPLETED_OK = 'UPLOAD_COMPLETED_OK';
export const UPLOAD_COMPLETED_FAILED = 'UPLOAD_COMPLETED_FAILED';

export const addFile = data => {
  return {
    type: ADD_FILE,
    data,
  };
};

export const uploadStarted = () => {
  return {
    type: UPLOAD_STARTED,
  };
};

export const uploadCompleted = success => {
  return {
    type: success ? UPLOAD_COMPLETED_OK : UPLOAD_COMPLETED_FAILED,
  };
};
