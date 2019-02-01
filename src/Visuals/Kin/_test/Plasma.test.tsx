// Vendor
import React from 'react';

import { shallow } from 'enzyme';

// Internal
import Plasma from '../Plasma';

describe('Plasma: test', () => {
  // test cases
  it('renders', () => {
    const wrapper = shallow(<Plasma plasma={1} />);

    expect(wrapper).toBeDefined();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {

  });
});
