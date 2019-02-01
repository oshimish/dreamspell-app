// Vendor
import React from 'react';
import * as g from 'dreamspell-math';
import moment from 'moment';

import { shallow } from 'enzyme';

// Internal
import MoonPage from '../MoonPage';

describe('MoonPage: test', () => {
  // test cases
  it('renders', () => {
    const wrapper = shallow(<MoonPage gdate={g.dreamdate(moment())} />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
