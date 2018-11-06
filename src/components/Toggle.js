import React, { Component } from 'react';
import './Toggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

class Toggle extends Component {
  state = {
    toggled: false,
  };

  toggledHandler = toggled => this.setState({ toggled });

  render() {
    const toggleClass = this.state.toggled ? 'on' : '';
    const toggleIcon = this.state.toggled ? (
      <FontAwesomeIcon
        icon={faArrowUp}
        className="toggle-icon"
        onClick={() => {
          this.toggledHandler(false);
        }}
      />
    ) : (
      <FontAwesomeIcon
        icon={faArrowDown}
        className="toggle-icon"
        onClick={() => {
          this.toggledHandler(true);
        }}
      />
    );
    const { children, title } = this.props;

    return (
      <div className={`instruction ${toggleClass}`}>
        <div className="toggle-header">
          <div>{title}</div>
          <div>{toggleIcon}</div>
        </div>
        <div>{children}</div>
      </div>
    );
  }
}

export default Toggle;
