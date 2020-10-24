// Vendor
import React from 'react';
import * as g from 'dreamspell-math';
import moment from 'moment';

import { shallow } from 'enzyme';

// Internal
import SignPage from '../SignPage';

describe('SignPage: test', () => {

  // test cases
  it('renders', () => {
    const wrapper = shallow(<SignPage />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
