// Vendor
import React from 'react';


import { shallow } from 'enzyme';

// Internal
import JourneyPage from '../JourneyPage';

describe('JourneyPage: test', () => {
  let props;

  // Any initialization
  beforeEach(() => {
    props = {
      // stub your component's props here
    };
  });

  // test cases
  it('renders', () => {
    const wrapper = shallow(<JourneyPage {...props} />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
