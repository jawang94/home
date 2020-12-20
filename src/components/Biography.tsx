import { Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;

const StyledParagraph = styled(Paragraph)`
  font-size: 0.85rem;
  line-height: 1.5;
`

export default function Biography() {
  return (
      <StyledParagraph>
          I grew up thinking I would become either an astronaut or a doctor.
          In reality, I became a software engineer, inventor, and entrepreneur.
          Life has its ways. Though, I still plan to go to space one day.
          <br />
          <br />
          I love working with brilliant minds to create brilliant products.
          I'm passionate not about the tools I use, but rather the doors they open.
          I'm inspired by the body of work being put in every day to push humanity
          farther and higher. Being able to chip in my two cents motivates me
          to give my all every day.
      </StyledParagraph>
  );
}
