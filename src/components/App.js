import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSigningJob } from '../actionCreators';
import FileUpload from './FileUpload';
import Header from './Header';
import './App.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  // handleUploadFile = event => {
  //   console.log('***************');
  //   const data = new FormData();
  //   data.append('file', event.target.files[0]);
  //   data.append('name', 'some value user types');
  //   data.append('description', 'some value user types');
  // };

  jobStateChanged = job => {
    if (!job || (Object.keys(job).length === 0 && job.constructor === Object)) {
      return 'Unknown';
    }

    return job.status;
  };

  deliveryUrlForJob = job => {
    if (!job || (Object.keys(job).length === 0 && job.constructor === Object)) {
      return <i>No Delivery URL</i>;
    }

    if (!job.url) {
      return <i>No Delivery URL</i>;
    }

    return (
      <a href={job.url} download>
        Download
      </a>
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FileUpload />
        <p className="App-intro">
          <button
            className="start-button"
            onClick={() => {
              this.props.createSigningJob(this.props.files);
            }}
          >
            Start
          </button>
        </p>
        <p>status = {this.jobStateChanged(this.props.job)}</p>
        <p>{this.deliveryUrlForJob(this.props.job)}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { files: state.files, job: state.job, api: state.api };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createSigningJob,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
