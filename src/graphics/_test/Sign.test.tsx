// Vendor
import React from 'react';

import * as g from 'dreamspell-math';

import { shallow } from 'enzyme';

// Internal
import Sign from '../Kin';

describe('Sign: test', () => {
  // test cases
  it('renders', () => {
    const wrapper = shallow(<Sign kin={g.kin(1)} />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
