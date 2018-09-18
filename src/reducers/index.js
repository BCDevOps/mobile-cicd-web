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

import { combineReducers } from 'redux';
import { ADD_FILE, UPLOAD_STARTED, JOB_CREATION_SUCCEEDED, JOB_CREATION_FAILED } from '../actions';
import { JOB_STATUS } from '../constants';

const file = (state, action) => {
  switch (action.type) {
    case ADD_FILE:
      return action.data;
    default:
      return {};
  }
};

const files = (state = [], action) => {
  switch (action.type) {
    case ADD_FILE:
      return [...state, file(undefined, action)];
    default:
      return state;
  }
};

const job = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_STARTED:
      return {
        status: UPLOAD_STARTED,
      };
    case JOB_CREATION_SUCCEEDED:
      return {
        status: JOB_STATUS.CREATED,
        jobId: action.jobId,
      };
    case JOB_CREATION_FAILED:
      return {};
    default:
      return state;
  }
};

const rootReducer = combineReducers({ files, job });

export default rootReducer;
