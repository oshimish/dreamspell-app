// Vendor
import React from 'react';
import * as g from 'dreamspell-math';
import moment from 'moment';


import { shallow } from 'enzyme';

// Internal
import WaveSpell from '../WaveSpell';

describe('WaveSpell: test', () => {

  // test cases
  it('renders', () => {
    const wrapper = shallow(<WaveSpell
      from={moment('2019-01-31')}
      iterator={(i) => i}
      render={(i) => <div />}
    />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
