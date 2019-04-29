import React from 'react';
import { shallow } from 'enzyme';
import FileUpload from '../../components/FileUpload/FileUpload';

describe('FileUpload Component', () => {
  const onFileAccepted = jest.fn();
  const files = [{ name: 'file1', size: 100 }];
  const files2 = [{ name: 'file1', size: 100 }, { name: 'file2', size: 200 }];

  it('matches snapshot', () => {
    const wrapper = shallow(<FileUpload onFileAccepted={onFileAccepted} files={files} />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('handles more than one files', () => {
    const wrapper = shallow(<FileUpload onFileAccepted={onFileAccepted} files={files2} />);
    expect(wrapper.find('.drop-zone').prop('disabled')).toBe(true);
    expect(wrapper.find('.title').text()).toBe('Only one file can be selected.');
    expect(wrapper.find('.sub-title').text()).toBe('');
  });
});
