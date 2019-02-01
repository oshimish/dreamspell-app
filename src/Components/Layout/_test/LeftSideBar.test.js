// Vendor
import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

// Internal
import LeftSideBar from '../LeftSideBar';

describe('LeftSideBar: test', () => {
  let props;

  // Any initialization
  beforeEach(() => {
    props = {
      // stub your component's props here
    };
  });

  // test cases
  it('renders', () => {
    const wrapper = shallow(<LeftSideBar {...props} />);

    expect(wrapper).to.not.be.empty();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
