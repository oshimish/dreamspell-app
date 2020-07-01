// Vendor
import React from 'react';


import * as g from 'dreamspell-math';
import { shallow } from 'enzyme';

// Internal
import SignTone from '../SignTone';

describe('SignTone: test', () => {
  // test cases
  it('renders', () => {
    const wrapper = shallow(<SignTone tone={g.tone(1)} />);

    expect(wrapper).toBeDefined();
  });

});
