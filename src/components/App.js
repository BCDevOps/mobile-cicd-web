import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSigningJob } from '../actionCreators';
import { authenticateFailed, authenticateSuccess } from '../actions';
import implicitAuthManager from '../auth';
import './App.css';
import FileUpload from './FileUpload';
import Footer from './Footer';
import Header from './Header';
import JobStatusIndicator from './JobStatusIndicator';
import Instruction from './Instruction';

export class App extends Component {
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
    // implicitAuthManager.handleOnPageLoad();
  };

  onPlatformChanged = e => {
    this.setState({ platform: e.currentTarget.value });
  };

  onFileAccepted = files => {
    this.setState({ files });
  };

  render() {
    return (
      <div>
        <Header authentication={this.props.authentication} />
        <div className="container">
          {/* <form> */}
          <ul className="flex-outer">
            <li>
              <label>Drag and drop the archive you with to sign onto this area.</label>
              <FileUpload files={this.state.files || []} onFileAccepted={this.onFileAccepted} />
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
                  this.props.createSigningJob(this.state.files, this.state.platform);
                }}
              >
                Start
              </button>
            </li>
          </ul>
          {/* </form> */}
          <JobStatusIndicator job={this.props.job} />
        </div>
        <div className="container">
          <Instruction />
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    job: state.job,
    api: state.api,
    authentication: state.authentication,
  };
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
