import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { overflow, link } from '../../shared/helpers';

const Wrapper: any = styled.div`
  display: flex;

  * {
    ${overflow};

    display: block;
    font-size: 15px;
    line-height: 21px;
    font-weight: 500;
    text-decoration: none;
    color: ${(props) => props.theme.normalText};
    ${(props: any) => props.full && 'white-space: unset'};
  }

  a {
    ${link({ underline: true })};
  }
`;

// eslint-disable-next-line consistent-return
const renderTitle = (props: {
  type: any;
  url: string;
  title: any;
  full: any;
  category: any;
  id: any;
}) => {
  let result;
  switch (props.type) {
    case 'link':
      result = <a href={props.url}>{props.title}</a>;
      break;
    case 'text':
      if (props.full) {
        result = <span>{props.title}</span>;
        break;
      }
      result = (
        <Link to={`/ama/a/${props.category}/${props.id}`}>{props.title}</Link>
      );
      break;
    default:
      break;
  }
  return result;
};

const PostContentTitle = (props: any) => (
  <Wrapper full={props.full}>{renderTitle(props)}</Wrapper>
);

export default PostContentTitle;
