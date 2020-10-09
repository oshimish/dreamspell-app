// Vendor
import React from 'react';


import { shallow } from 'enzyme';

// Internal
import { DateInput } from '../DateInput';
import moment from 'moment';

describe('DateInput: test', () => {

  // Any initialization
  beforeEach(() => {

  });

  // test cases
  it('renders', () => {
    const wrapper = shallow(<DateInput />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
