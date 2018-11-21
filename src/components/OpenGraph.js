/*
Copyright 2018 Province of British Columbia

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at 

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Created by Patrick Simonian
*/
import React from 'react';
import { Helmet } from 'react-helmet';
import { UNFURL_DATA } from '../constants';
const OpenGraph = () => (
  <Helmet>
    <meta name="og:card" content={UNFURL_DATA.CARD} />
    <meta name="og:title" content={UNFURL_DATA.TITLE} />
    <meta name="og:description" content={UNFURL_DATA.DESCRIPTION} />
    <meta name="og:image" content={UNFURL_DATA.IMAGE} />
  </Helmet>
);

export default OpenGraph;
