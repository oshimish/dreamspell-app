// Vendor
import React from 'react';
import * as g from 'dreamspell-math';
import moment from 'moment';

import { shallow } from 'enzyme';

// Internal
import TonePage from '../TonePage';

describe('TonePage: test', () => {
  // test cases
  it('renders', () => {
    const wrapper = shallow(<TonePage />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
