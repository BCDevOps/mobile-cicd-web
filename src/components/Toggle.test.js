import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

describe('Toggle Component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Toggle />);
    expect(wrapper).toMatchSnapshot();
  });

  it('changes state', () => {
    const wrapper = shallow(<Toggle />);
    expect(wrapper.state('toggled')).toBe(false);
    wrapper
      .find('.toggle-icon')
      .first()
      .simulate('click');
    expect(wrapper.state('toggled')).toBe(true);
  });

  it('changes the arrow icon', () => {
    const wrapper = shallow(<Toggle />);
    const button0 = wrapper.find('.toggle-icon').first();
    expect(button0.prop('icon')).toEqual(faArrowDown);
    button0.simulate('click');
    const button1 = wrapper.find('.toggle-icon').first();
    expect(button1.prop('icon')).toEqual(faArrowUp);
  });
});
