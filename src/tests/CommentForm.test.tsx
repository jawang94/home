import React from 'react';
import { shallow } from 'enzyme';
import CommentForm from '../components/AMA/CommentForm/Component';

it('renders without crashing', () => {
  shallow(<CommentForm handleSubmit={(fn) => fn} />);
});
