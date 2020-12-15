import { Button, PageHeader, Divider, Row, Tag, Typography } from 'antd';
import React, { FC } from 'react';

import {
    FilePdfFilled, GithubFilled, LinkedinFilled, MailFilled, MediumSquareFilled
} from '@ant-design/icons';

import elevat from '../img/elevat.png';
import guidelyte from '../img/guidelyte.png';
import xemelgo from '../img/xemelgo.png';
import jason from '../img/jason.jpg';
import MyTimeline from './MyTimeline';
import Biography from './Biography';
import { Fade, Slide } from 'react-reveal';

const { Title, Paragraph, Text } = Typography;

const Content = ({ children, extraContent }: any) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
};

export const guidelyteExperience = (
  <>
    <Content
      extraContent={
        <img
          src={guidelyte}
          alt="content"
          width="125px"
        />
      }
    >
      <Paragraph>
        <Title level={5}>Guidelyte | <Text>Founder, CEO, Chief Engineer</Text>
        </Title>
        <ul>
          <li>
            Founder, CEO, and Chief Engineer of Guidelyte, a startup whose mission is to create a world where chasing your dreams is exciting, not terrifying.
          </li>
          <li>
            Our vision is to aggregate the world's professional data in a centralized location and build the tools that disseminate it to the masses.
          </li>
          <li>
            My time is split between learning about our users, myself, and my team, in order to create a beautiful product experience that actually solves people’s problems.
          </li>
        </ul>
      </Paragraph>
    </Content>
  </>
);

export const elevatExperience = (
  <>
    <Content
      extraContent={
        <img
          src={elevat}
          alt="content"
          width="125px"
        />
      }
    >
      <Paragraph>
        <Title level={5}>Elevat | <Text>Software Engineer</Text>
        </Title>
        <ul>
          <li>
            Led front-end development for Elevāt’s Maintenance, Service, and Parts platform with React.js
          </li>
          <li>
            Owned multiple UI features including Gateway Provisioning, Command and Control, Role-Based Access Control, and Alerts
          </li>
          <li>
            Implemented back-end APIs for exporting IoT machine data to CSV using Golang
          </li>
          <li>
            Maintained high code review standards in all UI components for readability, functionality, and efficiency
          </li>
        </ul>
      </Paragraph>
    </Content>
  </>
);

export const xemelgoExperience = (
  <>
    <Content
      extraContent={
        <img
          src={xemelgo}
          alt="content"
          width="125px"
        />
      }
    >
      <Paragraph>
        <Title level={5}>Xemelgo | <Text>Software Engineer</Text>
        </Title>
        <ul>
          <li>
            Led front-end development of Xemelgo’s platform for inventory control and management
          </li>
          <li>
            Resolved platform compatibility issues across all devices and browsers
          </li>
          <li>
            Established a company-wide best practices, code quality, and styling guide for writing highly effective React code
          </li>
        </ul>
      </Paragraph>
    </Content>
  </>
);

const URL_CONSTANTS: Record<string, string> = {
  medium: 'https://medium.com/@wjason',
  email: 'mailto:wang.jason.010@gmail.com',
  github: 'https://github.com/jawang94',
  linkedin: 'https://www.linkedin.com/in/jasonwang94/',
  resume: 'https://jasonw.tech/rsc/CurrentResume.pdf'
}

const buttonClicked = (redirectTo: string) => {
  const url = URL_CONSTANTS[redirectTo];
  if (redirectTo !== 'email') {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
}

const ProfileSummary: FC = () => {
  return (
    <PageHeader
      title="Jason Wang"
      className="site-page-header"
      subTitle="Software Engineer, Entrepreneur"
      tags={<Tag color="green">Seeking Opportunities</Tag>}
      extra={[
        <Button key="5" onClick={() => buttonClicked('medium')}><MediumSquareFilled />Medium</Button>,
        <Button key="4" onClick={() => buttonClicked('email')}><MailFilled />Email</Button>,
        <Button key="3" onClick={() => buttonClicked('github')}><GithubFilled />GitHub</Button>,
        <Button key="2" onClick={() => buttonClicked('linkedin')}><LinkedinFilled />Linkedin</Button>,
        <Button key="1" type="primary" onClick={() => buttonClicked('resume')}><FilePdfFilled/>Resume</Button>,
      ]}
      avatar={{ shape: 'square', size: {xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}, src: jason}}
    >
      <Content>
        <Slide right>
          <Title level={3}>Biography</Title>
          <Biography />
        </Slide>
        <Divider />

        <Title level={3}>Timeline</Title>
        <Content>
          <Fade bottom>
            <MyTimeline />
          </Fade>
        </Content>
      </Content>
    </PageHeader>
  )
}

export default ProfileSummary;