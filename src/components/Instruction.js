import React, { Component } from 'react';
import './Instruction.css';
import { XML_SAMPLES } from '../constants';
import Toggle from './Toggle';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

class Instruction extends Component {
  render() {
    return (
      <div className="instructions">
        <h3>Steps to Upload Your App</h3>
        <Toggle title="XcodeArchive">
          <p>To package up an xcarchive to submit for signing you need to:</p>
          <ol>
            <li>
              <p>Create a folder to hold the xcarchive and options.plist</p>
            </li>
            <li>
              <p>Copy the xcarchive from xcode into the folder from step 1</p>
            </li>
            <li>
              <p>
                Create or copy your options.plist from step 1, you could update the content from below:
              </p>
              <SyntaxHighlighter language="xml" style={tomorrow}>
                {XML_SAMPLES.PLIST}
              </SyntaxHighlighter>
            </li>
          </ol>
        </Toggle>
        <Toggle title="IPA">
          <p>To package up an xcarchive to submit for signing you need to:</p>
          <ol>
            <li>
              <p>Create a folder to hold the xcarchive and options.plist</p>
            </li>
            <li>
              <p>Copy the xcarchive from xcode into the folder from step 1</p>
            </li>
            <li>
              <p>
                Create or copy your options.plist from step 1, you could update the content from below:
              </p>
            </li>
          </ol>
        </Toggle>
        <Toggle title="APK">
          <p>To package up an xcarchive to submit for signing you need to:</p>
          <ol>
            <li>
              <p>Create a folder to hold the xcarchive and options.plist</p>
            </li>
            <li>
              <p>Copy the xcarchive from xcode into the folder from step 1</p>
            </li>
            <li>
              <p>
                Create or copy your options.plist from step 1, you could update the content from below:
              </p>
            </li>
          </ol>
        </Toggle>
      </div>
    );
  }
}

export default Instruction;
