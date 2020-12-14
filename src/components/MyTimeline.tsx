import React from 'react';
import { Timeline, Collapse, Typography } from 'antd';
import { xemelgoExperience, elevatExperience, guidelyteExperience } from './ProfileSummary';

const { Panel } = Collapse;

const { Text } = Typography;

export default function MyTimeline() {
  return (
    <>
      <Timeline pending="To be continued..." reverse={true}>
        <Timeline.Item color="gray"><Text strong>Bye University</Text> | 08.2015</Timeline.Item>
        <Timeline.Item color="green"><Text strong>Hello World</Text> | 06.2018</Timeline.Item>
        <Timeline.Item color="green"><Text strong>Graduated Coding Dojo</Text> | 12.2018</Timeline.Item>
        <Timeline.Item color="green">
          <Collapse ghost>
            <Panel header={<><Text strong>Joined Xemelgo</Text> | 04.2019</>} key="1">
              {xemelgoExperience}
            </Panel>
          </Collapse>
        </Timeline.Item>
        <Timeline.Item color="green">
          <Collapse ghost>
            <Panel header={<><Text strong>Joined Elevat</Text> | 06.2019</>} key="1">
              {elevatExperience}
            </Panel>
          </Collapse>
        </Timeline.Item>
        <Timeline.Item color="blue">
          <Collapse ghost>
            <Panel header={<><Text strong>Founded Guidelyte</Text> | 06.2020</>} key="1">
              {guidelyteExperience}
            </Panel>
          </Collapse>
        </Timeline.Item>
      </Timeline>
    </>
  );
}
