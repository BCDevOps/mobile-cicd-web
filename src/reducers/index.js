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
import implicitAuthManager from '../auth';
import { ADD_FILE, API_ERROR, AUTHENTICATION, JOB_STATUS } from '../constants';

const authentication = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case AUTHENTICATION.SUCCESS:
      return { authenticated: true };
    case AUTHENTICATION.FAILED:
      implicitAuthManager.clearAuthLocalStorage();
      return { authenticated: false };
    default:
      return state;
  }
};

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
    case JOB_STATUS.CREATING:
      return {
        status: JOB_STATUS.CREATING,
        jobId: undefined,
        url: undefined,
      };
    case JOB_STATUS.CREATED:
      return {
        status: JOB_STATUS.CREATED,
        jobId: action.jobId,
        url: undefined,
      };
    case JOB_STATUS.FAILED:
      return {
        status: JOB_STATUS.FAILED,
        jobId: undefined,
        url: undefined,
      };
    case JOB_STATUS.PROCESSING:
      return {
        status: JOB_STATUS.PROCESSING,
        jobId: state.jobId,
        url: undefined,
      };
    case JOB_STATUS.COMPLETED:
      return {
        status: JOB_STATUS.COMPLETED,
        jobId: state.jobId,
        url: action.url,
      };
    default:
      return state;
  }
};

const api = (state = {}, action) => {
  switch (action.type) {
    case API_ERROR.JOB_STATUS_CHECK_FAILED:
      return {
        status: API_ERROR.JOB_STATUS_CHECK_FAILED,
        message: action.message,
        code: action.code,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ files, job, api, authentication });

export default rootReducer;
