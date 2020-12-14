import React from 'react';
import { Timeline, Collapse } from 'antd';
import { xemelgoExperience, elevatExperience, guidelyteExperience } from './ProfileSummary';

const { Panel } = Collapse;

export default function MyTimeline() {
  return (
    <>
      <Timeline pending="To be continued..." reverse={true}>
        <Timeline.Item color="gray"><span style={{fontWeight: 'bolder'}}>Bye University</span> | 08.2015</Timeline.Item>
        <Timeline.Item color="green"><span style={{fontWeight: 'bolder'}}>Hello World</span> | 06.2018</Timeline.Item>
        <Timeline.Item color="green"><span style={{fontWeight: 'bolder'}}>Graduated Coding Dojo</span> | 12.2018</Timeline.Item>
        <Timeline.Item color="green">
          <Collapse ghost>
            <Panel header={<><span style={{fontWeight: 'bolder'}}>Joined Xemelgo</span> | 04.2019</>} key="1">
              {xemelgoExperience}
            </Panel>
          </Collapse>
        </Timeline.Item>
        <Timeline.Item color="green">
          <Collapse ghost>
            <Panel header={<><span style={{fontWeight: 'bolder'}}>Joined Elevat</span> | 06.2019</>} key="1">
              {elevatExperience}
            </Panel>
          </Collapse>
        </Timeline.Item>
        <Timeline.Item color="blue">
          <Collapse ghost>
            <Panel header={<><span style={{fontWeight: 'bolder'}}>Founded Guidelyte</span> | 06.2020</>} key="1">
              {guidelyteExperience}
            </Panel>
          </Collapse>
        </Timeline.Item>
      </Timeline>
    </>
  );
}
