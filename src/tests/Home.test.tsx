import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/AMA/Home';

it('renders without crashing', () => {
  shallow(<Home />);
});
