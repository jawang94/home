import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Paragraph } = Typography;

const StyledParagraph = styled(Paragraph)`
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
      <StyledParagraph>
        I&apos;m Jason. I&apos;m a self-taught software engineer and serial
        entrepreneur.
      </StyledParagraph>
      <StyledParagraph>
        I love creating social products that focus on bringing people together
        and making the world&apos;s resources more accessible to everyone.
      </StyledParagraph>
      <StyledParagraph>
        In the last two years, I&apos;ve worked as a software engineer for two
        IoT startups, won 1st place at two hackathons, and co-founded a software
        startup.
      </StyledParagraph>
    </>
  );
}
