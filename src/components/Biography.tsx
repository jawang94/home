import { Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;

const StyledParagraph = styled(Paragraph)`
  font-size: 0.85rem;
  line-height: 20px;
  font-weight: 400;
`

export default function Biography() {
  return (
    <>
      <StyledParagraph>
        I'm a self-taught software engineer, inventor, and entrepreneur.
      </StyledParagraph>
      <StyledParagraph>
        I love creating brilliant products that fit seamlessly into your life.
      </StyledParagraph>
      <StyledParagraph>
        I have worked at two IoT startups, founded my own company, and continue to seek greater challenges.
      </StyledParagraph>
    </>
  );
}
