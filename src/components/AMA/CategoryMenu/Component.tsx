import React from 'react';
import styled from 'styled-components/macro';
import { Route } from 'react-router-dom';
import CategoryMenuDropdown from './Dropdown';
import CategoryMenuCreatePostButton from './CreatePostButton';

const Menu = styled.nav`
  display: none;
  border: 1px solid ${(props) => props.theme.border};
  border-left: none;
  border-right: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const CategoryMenu = ({ token }: any) => (
  <Menu>
    <Route
      path="/ama/a/:category"
      // eslint-disable-next-line react/no-children-prop
      children={({ match, history }) => (
        <CategoryMenuDropdown
          category={match ? match.params.category : 'all'}
          history={history}
        />
      )}
    />
    {token && <CategoryMenuCreatePostButton />}
  </Menu>
);

export default CategoryMenu;
