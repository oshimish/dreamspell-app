// Vendor
import React from 'react';


import * as g from 'dreamspell-math';
import moment from 'moment';
import { shallow } from 'enzyme';

// Internal
import KinPage from '../KinPage';

describe('KinPage: test', () => {
  // test cases
  it('renders', () => {
    const wrapper = shallow(<KinPage gdate={g.dreamdate(moment())} />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
