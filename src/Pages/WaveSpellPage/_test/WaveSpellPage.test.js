// Vendor
import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

// Internal
import WaveSpellPage from '../WaveSpellPage';

describe('WaveSpellPage: test', () => {
  let props;

  // Any initialization
  beforeEach(() => {
    props = {
      // stub your component's props here
    };
  });

  // test cases
  it('renders', () => {
    const wrapper = shallow(<WaveSpellPage {...props} />);

    expect(wrapper).to.not.be.empty();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
