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
          <li><Text copyable>Make every detail perfect and limit the number of details to perfect.</Text></li>
        </ul>
      </StyledParagraph>
  );
}
