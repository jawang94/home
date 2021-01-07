/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components/macro';
import PostContentTitle from './Title';
import PostContentPreview from './Preview';
import PostContentFullText from './FullText';
import PostContentDetail from './Detail';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-left: 1px solid ${(props) => props.theme.border};
  padding: 8px;
  min-width: 0;
`;

// eslint-disable-next-line consistent-return
const renderContent = ({ type, url, showFullPost, text }: any) => {
  switch (type) {
    case 'link':
      return <PostContentPreview>{url}</PostContentPreview>;
    case 'text':
      if (showFullPost) {
        return <PostContentFullText>{text}</PostContentFullText>;
      }
      return <PostContentPreview>{text}</PostContentPreview>;
    default:
      break;
  }
};

const PostContent = (props: any) => {
  const {
    url,
    title,
    type,
    text,
    commentCount,
    showFullPost,
    ...details
  } = props;

  return (
    <Wrapper>
      <PostContentTitle
        url={url}
        title={title}
        type={type}
        full={showFullPost}
        {...details}
      />
      {renderContent({ type, url, text, showFullPost })}
      <PostContentDetail commentCount={commentCount} {...details} />
    </Wrapper>
  );
};

export default PostContent;
