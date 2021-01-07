import React from 'react';
import { Typography } from 'antd';
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

export default function QuoteList() {
  return (
    <Paragraph>
      <ul>
        <li>
          <StyledText copyable>
            Properly frame a question and the answer will be comparatively easy.
          </StyledText>
        </li>
        <li>
          <StyledText copyable>
            If a design is taking too long, the design is probably wrong.
          </StyledText>
        </li>
        <li>
          <StyledText copyable>
            Every design is to some degree wrong.
          </StyledText>
        </li>
        <li>
          <StyledText copyable>
            The goal of iterating is to get less wrong over time.
          </StyledText>
        </li>
      </ul>
    </Paragraph>
  );
}
