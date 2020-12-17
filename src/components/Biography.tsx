import { Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph, Text } = Typography;

const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  line-height: 1.5;
`

export default function Biography() {
  return (
      <StyledParagraph>
          I grew up thinking I would become either an astronaut or a doctor.
          Here I am, writing to you as a software engineer, inventor, and entrepreneur.
          Life has its ways. Although, I still wish to go to space.
          I love working with brilliant minds to create brilliant products.
          I believe that's how I can make the most difference for others.
          I'm a serial dreamer and tinkerer.
          <br/>
          <br/>
          <Text keyboard>To live and create for others. That is a beautiful life.</Text>
      </StyledParagraph>
  );
}
