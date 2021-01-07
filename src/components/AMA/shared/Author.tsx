import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { link } from './helpers';
import CrownIcon from './crown.svg';

const StyledLink = styled(Link)`
  ${link};

  align-items: 'center';
  font-weight: 500;
  color: ${(props) => props.theme.normalText};
`;

// eslint-disable-next-line react/require-default-props
const Author = ({ username, admin }: { username: string; admin?: boolean }) => (
  <div
    style={{
      height: 16,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: admin ? 0 : null,
    }}
  >
    <StyledLink to={`/ama/u/${username}`}>{username}</StyledLink>
    {admin ? (
      <img
        src={CrownIcon}
        style={{ height: 18 }}
        className="filter-gold"
        alt="React Logo"
      />
    ) : null}
  </div>
);

export default Author;
