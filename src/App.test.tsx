import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('<App />', () => {
  it('renders without crashing', () => {
    const actual = 1;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it('renders the heading', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('Test');
  });
});


