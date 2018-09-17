import React, { Component } from 'react';
import './App.css';
import logo from './bcgovlogo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSigningJob } from '../actionCreators';
import FileUpload from './FileUpload';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  handleUploadFile = event => {
    console.log('***************');
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('name', 'some value user types');
    data.append('description', 'some value user types');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FileUpload />
        <p className="App-intro">
          <button
            onClick={() => {
              console.log('4', this.props.files);
              this.props.createSigningJob(this.props.files);
              // this.input.value = '';
            }}
          >
            Upload Document
          </button>
        </p>
        <p>status = {this.props.status}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { files: state.files, status: state.upload };
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
