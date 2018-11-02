import React, { Component } from 'react';
import './Instruction.css';
import { XML_SAMPLES } from '../constants';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/styles/prism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

class Instruction extends Component {
  state = {
    toggled: false,
  };

  toggledHandler = toggled => this.setState({ toggled });

  render() {
    // For the state of instruction component
    const toggleClass = this.state.toggled ? 'on' : '';
    // For the state of button component
    const toggleIcon = this.state.toggled ? (
      <FontAwesomeIcon icon={faArrowUp} className="file-icon" onClick={() => {this.toggledHandler(false)}} /> 
    ) : (
      <FontAwesomeIcon icon={faArrowDown} className="file-icon" onClick={() => {this.toggledHandler(true)}} />
    );

    return (
      <div className="instructions">
        <h3>Steps to Upload Your App</h3>
        <article className={`instruction ${toggleClass}`}>
          <div className="toggle"> {toggleIcon} </div>
          <h4>XcodeArchive</h4>
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
              <SyntaxHighlighter language="xml" style={dark}>
                {XML_SAMPLES.PLIST}
              </SyntaxHighlighter>
            </li>
          </ol>
        </article>
      </div>
    );
  }
}

export default Instruction;
