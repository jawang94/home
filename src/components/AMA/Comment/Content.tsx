import React from 'react';
import styled from 'styled-components/macro';
import Markdown from '../shared/Markdown';

const Content = styled.div`
  padding: 12px;
`;

const CommentContent = ({ children }) => (
  <Content>
    <Markdown>{children}</Markdown>
  </Content>
);

export default CommentContent;
