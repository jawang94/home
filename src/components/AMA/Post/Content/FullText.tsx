import React from 'react';
import styled from 'styled-components/macro';
import Markdown from '../../shared/Markdown';

const Wrapper = styled.div`
  margin: 8px -8px;
  border: 1px solid ${(props) => props.theme.border};
  border-left: none;
  border-right: none;
  padding: 8px;
  background-color: ${(props) => props.theme.inputBackground};

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    text-align: left;
    word-break: break-word;
  }
`;

const PostContentFullText = (props: { children: any }) => (
  <Wrapper>
    <Markdown>{props.children}</Markdown>
  </Wrapper>
);

export default PostContentFullText;
