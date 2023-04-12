// Vendor
import React from 'react';

import * as g from 'dreamspell-math';
import moment from 'moment';

import { shallow } from 'enzyme';

// Internal
import Moon from '../Moon';

describe('Moon: test', () => {
  // test cases 
  it('renders', () => {
    const wrapper = shallow(<Moon firstDay={g.dreamdate(moment('2019-01-31'))} />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
