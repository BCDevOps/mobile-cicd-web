import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { css } from 'react-emotion';
import { connect } from 'react-redux';
import { MoonLoader } from 'react-spinners';
import { bindActionCreators } from 'redux';
import { createSigningJob } from '../actionCreators';
import { authenticateFailed, authenticateSuccess } from '../actions';
import implicitAuthManager from '../auth';
import { JOB_STATUS } from '../constants';
import './App.css';
import FileUpload from './FileUpload';
import Footer from './Footer';
import Header from './Header';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #003366;
`;

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  // handleUploadFile = event => {
  //   console.log('***************');
  //   const data = new FormData();
  //   data.append('file', event.target.files[0]);
  //   data.append('name', 'some value user types');
  //   data.append('description', 'some value user types');
  // };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount = () => {
    implicitAuthManager.registerHooks({
      onAuthenticateSuccess: () => this.props.login(),
      onAuthenticateFail: () => this.props.logout(),
      // onAuthLocalStorageCleared: () => this.props.logout(),
    });
    implicitAuthManager.handleOnPageLoad();
  };

  jobStateChanged = job => {
    if (!job || (Object.keys(job).length === 0 && job.constructor === Object)) {
      return <div />;
    }

    switch (job.status) {
      case JOB_STATUS.CREATING:
        return (
          <div className="job-status">
            <MoonLoader
              className={override}
              sizeUnit={'px'}
              size={18}
              color={'#123abc'}
              loading={this.state.loading}
            />
            &nbsp;&nbsp; Creating
          </div>
        );
      case JOB_STATUS.PROCESSING:
        return (
          <div className="job-status">
            <MoonLoader
              className={override}
              sizeUnit={'px'}
              size={18}
              color={'#003366'}
              loading={this.state.loading}
            />
            &nbsp;&nbsp; Processing
          </div>
        );
      case JOB_STATUS.COMPLETED:
        return (
          <div className="job-status">
            <FontAwesomeIcon icon="file-download" className="file-download-icon" />
            &nbsp;&nbsp; {this.deliveryUrlForJob(this.props.job)}
          </div>
        );

      default:
        return <div />;
    }
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

  onPlatformChanged = e => {
    this.setState({ platform: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {/* <form> */}
          <ul className="flex-outer">
            <li>
              <label>Drag and drop the archive you with to sign onto this area.</label>
              <FileUpload />
            </li>
            <li>
              <p>What is the deployment platform this archive is meant for?</p>
              <ul className="flex-inner">
                <li>
                  <input
                    type="radio"
                    id="platform-ios"
                    name="platform"
                    value="ios"
                    onChange={this.onPlatformChanged}
                  />
                  <label htmlFor="platform-ios">iOS</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="platform-android"
                    name="platform"
                    value="android"
                    onChange={this.onPlatformChanged}
                  />
                  <label htmlFor="platform-android">Android</label>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => {
                  this.props.createSigningJob(this.props.files, 'ios');
                }}
              >
                Start
              </button>
            </li>
          </ul>
          {/* </form> */}
          {this.jobStateChanged(this.props.job)}
        </div>
        <Footer />
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
      login: () => dispatch(authenticateSuccess()),
      logout: () => dispatch(authenticateFailed()),
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
