// Vendor
import React from 'react';


import { shallow } from 'enzyme';
import * as g from 'dreamspell-math';

// Internal
import Kin from '../Kin';

describe('Kin: test', () => {
  // Any initialization
  beforeEach(() => {

  });

  // test cases
  it('renders', () => {
    const wrapper = shallow(<Kin kin={g.kin(1)} />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
