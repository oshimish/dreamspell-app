// Vendor
import React from 'react';

import * as g from 'dreamspell-math';
import moment from 'moment';

import { shallow } from 'enzyme';

// Internal
import PlasmaPage from '../PlasmaPage';

describe('PlasmaPage: test', () => {
  // test cases
  it('renders', () => {
    const wrapper = shallow(<PlasmaPage />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
