// Vendor
import React from 'react';


import * as g from 'dreamspell-math';
import { shallow } from 'enzyme';

// Internal
import SignTone from '../Kin';

describe('SignTone: test', () => {
  // test cases
  it('renders', () => {
    const wrapper = shallow(<SignTone kin={g.kin(1)} />);

    expect(wrapper).toBeDefined();
  });

});
