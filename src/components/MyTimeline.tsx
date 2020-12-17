import React from 'react';
import { Timeline, Collapse, Typography } from 'antd';
import styled from 'styled-components';
import { xemelgoExperience, elevatExperience, guidelyteExperience } from './ProfileSummary';

const { Panel } = Collapse;

const { Text } = Typography;

const StyledMenuItem = styled(Timeline.Item)`
  font-size: 0.85rem;
`

const StyledPanel = styled(Panel)`
  font-size: 0.85rem;
`

export default function MyTimeline() {
  return (
    <>
      <Timeline pending="To be continued..." reverse={true}>
        <StyledMenuItem color="gray"><Text strong>Bye University</Text> | 08.2015</StyledMenuItem>
        <StyledMenuItem color="green"><Text strong>Hello World</Text> | 06.2018</StyledMenuItem>
        <StyledMenuItem color="green"><Text strong>Graduated Coding Dojo</Text> | 12.2018</StyledMenuItem>
        <StyledMenuItem color="green">
          <Collapse ghost>
            <StyledPanel header={<><Text strong>Joined Xemelgo</Text> | 04.2019</>} key="1">
              {xemelgoExperience}
            </StyledPanel>
          </Collapse>
        </StyledMenuItem>
        <StyledMenuItem color="green">
          <Collapse ghost>
            <StyledPanel header={<><Text strong>Joined Elevat</Text> | 06.2019</>} key="1">
              {elevatExperience}
            </StyledPanel>
          </Collapse>
        </StyledMenuItem>
        <StyledMenuItem color="blue">
          <Collapse ghost>
            <StyledPanel header={<><Text strong>Founded Guidelyte</Text> | 06.2020</>} key="1">
              {guidelyteExperience}
            </StyledPanel>
          </Collapse>
        </StyledMenuItem>
      </Timeline>
    </>
  );
}
