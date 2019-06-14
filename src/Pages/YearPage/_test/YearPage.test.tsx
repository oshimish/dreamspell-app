// Vendor
import React from 'react';


import { shallow } from 'enzyme';

import * as g from 'dreamspell-math';

// Internal
import YearPage from '../YearPage';
import moment from 'moment';
import { WaveSpell } from '../../../Visuals';

describe('YearPage: test', () => {

  // test cases
  it('renders', () => {
    const wrapper = shallow(<YearPage gdate={g.dreamdate(moment('2019-01-31'))} />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should start year from correct date', () => {
    const wrapper = shallow(<YearPage gdate={g.dreamdate(moment('2019-01-31'))} />);

    expect(wrapper.find(WaveSpell).prop('from')).toBe(moment('2018-07-26'));
  });
});
