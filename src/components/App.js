import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSigningJob } from '../actionCreators';
import { authenticateFailed, authenticateSuccess } from '../actions';
import implicitAuthManager from '../auth';
import './App.css';
import Aux from '../hoc/auxillary';
import TwitterCard from './TwitterCard';
import OpenGraph from './OpenGraph';
import FileUpload from './FileUpload/FileUpload';
import Footer from './UI/Footer';
import Header from './UI/Header';
import Instruction from './Instruction/Instruction';
import JobStatusIndicator from './JobStatusIndicator/JobStatusIndicator';

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
    // don't call function if on localhost
    if (!window.location.host.match(/localhost/)) {
      implicitAuthManager.handleOnPageLoad();
    }
  };

  onPlatformChanged = e => {
    this.setState({ platform: e.currentTarget.value });
  };

  onFileAccepted = files => {
    this.setState({ files });
  };

  render() {
    return (
      <Aux>
        <TwitterCard />
        <OpenGraph />
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
                    if (!implicitAuthManager.isAuthenticated()) {
                      alert('You need to login before you can submit signing jobs.');
                      return;
                    }

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
      </Aux>
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
