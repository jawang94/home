import React from 'react';
import { shallow } from 'enzyme';
import Post from '../components/AMA/Post';
import PostVoteContainer from '../components/AMA/Post/Vote/Container';
import PostContent from '../components/AMA/Post/Content';

it('renders without crashing', () => {
  shallow(<Post />);
});

it('renders vote buttons and score', () => {
  const wrapper = shallow(<Post />);
  expect(wrapper.contains(<PostVoteContainer />)).toEqual(true);
});

it('renders information about the post', () => {
  const wrapper = shallow(<Post />);
  expect(wrapper.contains(<PostContent commentCount={0} />)).toEqual(true);
});
