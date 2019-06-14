// Vendor
import React from 'react';


import { shallow } from 'enzyme';

// Internal
import RightSideBar from '../RightSideBar';

describe('RightSideBar: test', () => {
  let props;

  // Any initialization
  beforeEach(() => {
    props = {
      // stub your component's props here
    };
  });

  // test cases
  it('renders', () => {
    const wrapper = shallow(<RightSideBar {...props} />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
