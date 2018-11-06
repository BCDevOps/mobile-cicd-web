import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';
import Header from './Header';
import Footer from './Footer';

describe('App Component', () => {
  // TODO: (sh) Update this test case
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('renders without crashing', () => {
    const wrapper = shallow(<App><Header authentication={{ isAuthenticated: true }} /><Footer /></App>);
    expect(wrapper).toMatchSnapshot();
  });
});
