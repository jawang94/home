import { Button, Card, Col, Divider, PageHeader, Row, Tag, Typography } from 'antd';
import React, { FC } from 'react';
import { Fade, Slide } from 'react-reveal';
import styled from 'styled-components';

import {
    FilePdfFilled, GithubFilled, LinkedinFilled, MailFilled, MediumSquareFilled
} from '@ant-design/icons';

import elevat from '../img/elevat.png';
import guidelyte from '../img/guidelyte.png';
import jason from '../img/jason.jpg';
import xemelgo from '../img/xemelgo.png';
import Biography from './Biography';
import Calendly from './Calendly';
import MyTimeline from './MyTimeline';
import QuoteList from './QuoteList';
import { Article } from './Article';
import articleData from '../utils/articleData';

const { Title, Paragraph } = Typography;

const StyledButton = styled(Button)`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`

const StyledAnchor = styled.a`
  display: block !important;
  border-bottom: 1px solid var(--color-border-primary) !important;
  color: var(--color-text-link);
  text-decoration: none;
`

const StyledImg = styled.img`
  display: block !important;
  margin-right: auto !important;
  margin-left: auto !important;
  max-width: 100% !important;
  max-height: 100% !important;
  border-style: none !important;
`

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 8px !important;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  color: var(--color-text-secondary) !important;
`

export const Content = ({ children, extraContent }: any) => {
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
      <Paragraph style={{ paddingRight: '1rem' }}>
        <Title level={4}>Founder, CEO, &amp; Chief Engineer</Title>
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
      <Paragraph style={{ paddingRight: '1rem' }}>
        <Title level={4}>Software Engineer</Title>
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
      <Paragraph style={{ paddingRight: '1rem' }}>
        <Title level={4}>Software Engineer</Title>
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

const extraButtons = (
  <>
    <StyledButton size="large" key="5" onClick={() => buttonClicked('medium')}><MediumSquareFilled />Medium</StyledButton>
    <StyledButton size="large" key="4" onClick={() => buttonClicked('email')}><MailFilled />Email</StyledButton>
    <StyledButton size="large" key="3" onClick={() => buttonClicked('github')}><GithubFilled />GitHub</StyledButton>
    <StyledButton size="large" key="2" onClick={() => buttonClicked('linkedin')}><LinkedinFilled />Linkedin</StyledButton>
    <StyledButton size="large" key="1" type="primary" onClick={() => buttonClicked('resume')}><FilePdfFilled/>Resume</StyledButton>
  </>
)

const ProfileSummary: FC = () => {
  return (
    <PageHeader
      title="Jason Wang"
      className="site-page-header"
      subTitle="Seattle, WA"
      tags={<Tag style={{ fontSize:'14px', lineHeight: '20px' }} color="green">Open To Opportunities</Tag>}
      extra={extraButtons}
      avatar={{ shape: 'circle', size: {xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}, src: jason}}
      style={{ paddingTop: '24px' }}
    >
      <Content>
        <Divider style={{ margin: '12px 0' }} />
        <Content>
          <Fade bottom>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={12} className="gutter-row">
                <Slide left>
                  <Card>
                    <Title level={3}>Hello</Title>
                    <Biography />
                  </Card>
                </Slide>
                <Divider />
                <Slide left>
                  <Card>
                    <Title level={3}>Speak With Me</Title>
                    <Calendly />
                  </Card>
                </Slide>
                <Divider />
                <Slide left>
                  <Card>
                    <Title level={3}>Favorite Quotes</Title>
                    <QuoteList />
                  </Card>
                </Slide>
                <Divider />
                <Slide left>
                  <Card>
                    <Title level={3}>Food App</Title>
                    <Article content={articleData.munchwheel} />
                  </Card>
                </Slide>
                <Divider />
                <Slide left>
                  <Card>
                    <Title level={3}>Chat App</Title>
                    <Article content={articleData.blast} />
                  </Card>
                </Slide>
                <Divider />
                <Slide left>
                  <Card>
                    <Title level={3}>Reading List</Title>
                    <StyledParagraph>See what I've been reading.</StyledParagraph>
                    <StyledAnchor href={'https://www.notion.so/Reading-List-116054e18e4f423a9ed35d378cc58e09'}>
                      <StyledImg src={'https://user-images.githubusercontent.com/41667764/103757797-1aff7400-4fc6-11eb-8ade-34ef299baa9b.png'} alt="top-image" />
                    </StyledAnchor>
                  </Card>
                </Slide>
              </Col>

              <Col span={12} className="gutter-row">
                <Slide right>
                  <Card>
                    <Title level={3}>Timeline</Title>
                    <MyTimeline />
                  </Card>
                </Slide>
                <Divider />
                <Slide right>
                  <Card>
                    <Title level={3}>Showcase</Title>
                    <Article content={articleData.guidelyte} />
                  </Card>
                </Slide>
                <Divider />
                <Slide right>
                  <Card>
                    <Title level={3}>1st Place @Sachacks2018</Title>
                    <Article content={articleData.defhacks} />
                  </Card>
                </Slide>
                <Divider />
                <Slide right>
                  <Card>
                    <Title level={3}>1st Place @DefHacks2019</Title>
                    <Article content={articleData.sachacks} vertical />
                  </Card>
                </Slide>
              </Col>
            </Row>
          </Fade>
        </Content>
      </Content>
    </PageHeader>
  )
}

export default ProfileSummary;