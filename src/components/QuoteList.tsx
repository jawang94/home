import { Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph, Text } = Typography;

const StyledParagraph = styled(Paragraph)`
  font-size: 0.85rem;
  line-height: 1.5;
`

export default function QuoteList() {
  return (
      <StyledParagraph>
        <ul>
          <li><Text copyable>Properly frame a question and the answer will be comparatively easy.</Text></li>
          <li><Text copyable>If a design is taking too long, the design is probably wrong.</Text></li>
          <li><Text copyable>Every design is to some degree wrong.</Text></li>
          <li><Text copyable>The goal of iterating is to get less wrong over time.</Text></li>
        </ul>
      </StyledParagraph>
  );
}
