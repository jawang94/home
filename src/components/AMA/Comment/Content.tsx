import React from 'react';
import styled from 'styled-components/macro';
import Markdown from '../shared/Markdown';

const Content = styled.div`
  padding: 12px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    text-align: left;
    word-break: break-word;
  }
`;

const CommentContent = ({ children }: any) => (
  <Content>
    <Markdown>{children}</Markdown>
  </Content>
);

export default CommentContent;
