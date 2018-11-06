import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';
import Header from './Header';
import Footer from './Footer';

describe('App Component', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('renders without crashing', () => {
    const wrapper = shallow(<App authentication={{ isAuthenticated: true }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
