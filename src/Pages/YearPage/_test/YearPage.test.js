// Vendor
import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import * as g from 'dreamspell-math';

// Internal
import YearPage from '../YearPage';
import moment from 'moment';

describe('YearPage: test', () => {
  let props;

  // Any initialization
  beforeEach(() => {
    props = {
      // stub your component's props here
    };
  });

  // test cases
  it('renders', () => {
    const wrapper = shallow(<YearPage {...props} />);

    expect(wrapper).to.not.be.empty();
  });

  // Replace this with your own specs
  it('should start year from correct date', () => {
    const wrapper = shallow(<YearPage gdate={g.dreamdate(moment('2019-01-31'))} />);

    expect(wrapper.find(<Visuals.WaveSpell />).prop('from')).to.be(moment('2018-07-26'));
  });
});
