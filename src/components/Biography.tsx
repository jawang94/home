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
        My past experiences include 1st Place at two Hackathons, software engineering at two IoT startups, and founding my own internet company.
      </StyledParagraph>
    </>
  );
}
