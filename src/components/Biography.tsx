import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Paragraph, Text } = Typography;

const StyledText = styled(Text)`
  margin-bottom: 8px !important;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  color: var(--color-text-secondary) !important;
`;

export default function Biography() {
  return (
    <>
      <Paragraph>
        <StyledText style={{ fontWeight: 'bold' }}>I am a...</StyledText>
        <br />
        <StyledText>
          Software Engineer, Inventor, and Serial Entrepreneur
        </StyledText>
        <br />
        <br />
        <StyledText style={{ fontWeight: 'bold' }}>
          I am currently...
        </StyledText>
        <br />
        <StyledText>
          Building a vibrant future for digital creators{' '}
          <a href="https://makersplace.com">@MakersPlace</a>
        </StyledText>
        <br />
        <br />
        <StyledText style={{ fontWeight: 'bold' }}>I love...</StyledText>
        <br />
        <StyledText>
          Creating great products that enrich people&apos;s lives and open new
          possibilities.
        </StyledText>
      </Paragraph>
    </>
  );
}
