import { Collapse, Row, Timeline, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

import elevat from '../img/elevat.png';
import guidelyte from '../img/guidelyte.png';
import xemelgo from '../img/xemelgo.png';
import topicspace from '../img/topicspace.png';
import makersplace from '../img/makersplace.png';

const { Panel } = Collapse;
const { Paragraph, Text, Title } = Typography;

export const Content = ({ children, extraContent }: any) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
};

export const StyledTitle = styled(Title)`
  fontweight: 500 !important;
  color: var(--color-text-primary) !important;
`;

const StyledMenuItem = styled(Timeline.Item)`
  font-size: 1rem;
`;

const StyledPanel = styled(Panel)`
  font-size: 1rem;
`;

export const makersplaceExperience = (
  <>
    <Content
      extraContent={<img src={makersplace} alt="content" width="125px" />}
    >
      <Paragraph style={{ paddingRight: '1rem' }}>
        <StyledTitle level={4}>Full-Stack Software Engineer</StyledTitle>
        <ul>
          <li>
            Enabling a vibrant and sustainable future for digital creativity,
            starting by empowering the world&apos;s digital creators.
          </li>
        </ul>
      </Paragraph>
    </Content>
  </>
);

export const topicspaceExperience = (
  <>
    <Content
      extraContent={<img src={topicspace} alt="content" width="125px" />}
    >
      <Paragraph style={{ paddingRight: '1rem' }}>
        <StyledTitle level={4}>Co-founder &amp; Lead Engineer</StyledTitle>
        <ul>
          <li>
            Launched in 2021, TopicSpace is a community of experts and learners
            co-creating content around everything they’re passionate about.
          </li>
          <li>
            This is more than just social media; this is social knowledge
            sharing — high quality, multi-media, and diverse content sourced
            from the experiences of many. TopicSpace lets creators seamlessly
            integrate their communities into their lives. Market yourself, grow
            your audience, and engage with fans in less time and with better
            results.
          </li>
          <li>
            As the sole engineer my primary responsibility is building and
            scaling the app. But, I do a bit of everything and thoroughly enjoy
            the other aspects of launching a product from zero.
          </li>
        </ul>
      </Paragraph>
    </Content>
  </>
);

export const guidelyteExperience = (
  <>
    <Content extraContent={<img src={guidelyte} alt="content" width="125px" />}>
      <Paragraph style={{ paddingRight: '1rem' }}>
        <StyledTitle level={4}>Co-founder &amp; Lead Engineer</StyledTitle>
        <ul>
          <li>
            Guidelyte is a startup whose mission is to create a world where
            chasing your dreams is exciting, not terrifying.
          </li>
          <li>
            Our vision is to aggregate the world&apos;s professional data in a
            centralized location and build the tools that disseminate it to the
            masses.
          </li>
          <li>
            My time is split between learning about our users, myself, and my
            team, in order to create a beautiful product experience that
            actually solves people’s problems.
          </li>
        </ul>
      </Paragraph>
    </Content>
  </>
);

export const elevatExperience = (
  <>
    <Content extraContent={<img src={elevat} alt="content" width="125px" />}>
      <Paragraph style={{ paddingRight: '1rem' }}>
        <StyledTitle level={4}>Software Engineer</StyledTitle>
        <ul>
          <li>
            Led front-end development for Elevāt’s Maintenance, Service, and
            Parts platform with React.js
          </li>
          <li>
            Owned multiple UI features including Gateway Provisioning, Command
            and Control, Role-Based Access Control, and Alerts
          </li>
          <li>
            Implemented back-end APIs for exporting IoT machine data to CSV
            using Golang
          </li>
          <li>
            Maintained high code review standards in all UI components for
            readability, functionality, and efficiency
          </li>
        </ul>
      </Paragraph>
    </Content>
  </>
);

export const xemelgoExperience = (
  <>
    <Content extraContent={<img src={xemelgo} alt="content" width="125px" />}>
      <Paragraph style={{ paddingRight: '1rem' }}>
        <StyledTitle level={4}>Software Engineer</StyledTitle>
        <ul>
          <li>
            Led front-end development of Xemelgo’s platform for inventory
            control and management
          </li>
          <li>
            Resolved platform compatibility issues across all devices and
            browsers
          </li>
          <li>
            Established a company-wide best practices, code quality, and styling
            guide for writing highly effective React code
          </li>
        </ul>
      </Paragraph>
    </Content>
  </>
);

export default function MyTimeline() {
  return (
    <>
      <Timeline pending="To be continued..." reverse>
        <StyledMenuItem color="gray">
          <Text strong>Bye University</Text> | 08.2015
        </StyledMenuItem>
        <StyledMenuItem color="green">
          <Text strong>Hello World</Text> | 06.2018
        </StyledMenuItem>
        <StyledMenuItem color="green">
          <Text strong>Graduated Coding Dojo</Text> | 12.2018
        </StyledMenuItem>
        <StyledMenuItem color="green">
          <Collapse ghost>
            <StyledPanel
              header={
                <>
                  <Text strong>Joined Xemelgo</Text> | 04.2019
                </>
              }
              key="1"
            >
              {xemelgoExperience}
            </StyledPanel>
          </Collapse>
        </StyledMenuItem>
        <StyledMenuItem color="green">
          <Collapse ghost>
            <StyledPanel
              header={
                <>
                  <Text strong>Joined Elevat</Text> | 06.2019
                </>
              }
              key="1"
            >
              {elevatExperience}
            </StyledPanel>
          </Collapse>
        </StyledMenuItem>
        <StyledMenuItem color="green">
          <Collapse ghost>
            <StyledPanel
              header={
                <>
                  <Text strong>Founded Guidelyte</Text> | 06.2020
                </>
              }
              key="1"
            >
              {guidelyteExperience}
            </StyledPanel>
          </Collapse>
        </StyledMenuItem>
        <StyledMenuItem color="blue">
          <Collapse ghost>
            <StyledPanel
              header={
                <>
                  <Text strong>Launched TopicSpace</Text> | 02.2021
                </>
              }
              key="1"
            >
              {topicspaceExperience}
            </StyledPanel>
          </Collapse>
        </StyledMenuItem>
        <StyledMenuItem color="blue">
          <Collapse ghost>
            <StyledPanel
              header={
                <>
                  <Text strong>Joined MakersPlace</Text> | 05.2021
                </>
              }
              key="1"
            >
              {makersplaceExperience}
            </StyledPanel>
          </Collapse>
        </StyledMenuItem>
      </Timeline>
    </>
  );
}
