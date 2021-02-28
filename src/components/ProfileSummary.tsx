import {
  Button,
  Card,
  Col,
  Divider,
  PageHeader,
  Row,
  Tag,
  Typography,
} from 'antd';
import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Fade, Slide } from 'react-reveal';
import styled from 'styled-components';

import {
  FilePdfFilled,
  GithubFilled,
  LinkedinFilled,
  MailFilled,
  MediumSquareFilled,
} from '@ant-design/icons';

import jason from '../img/jason.jpg';
import articleData from '../utils/articleData';
import Article from './Article';
import Biography from './Biography';
import Calendly from './Calendly';
import MyTimeline from './MyTimeline';
import QuoteList from './QuoteList';

const { Title, Paragraph } = Typography;

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

const StyledButton = styled(Button)`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const StyledAnchor = styled.a`
  display: block !important;
  border-bottom: 1px solid var(--color-border-primary) !important;
  color: var(--color-text-link);
  text-decoration: none;
`;

const StyledImg = styled.img`
  display: block !important;
  margin-right: auto !important;
  margin-left: auto !important;
  max-width: 100% !important;
  max-height: 100% !important;
  border-style: none !important;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 8px !important;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  color: var(--color-text-secondary) !important;
`;

const URL_CONSTANTS: Record<string, string> = {
  medium: 'https://medium.com/@wjason',
  email: 'mailto:wang.jason.010@gmail.com',
  github: 'https://github.com/jawang94',
  linkedin: 'https://www.linkedin.com/in/jasonwang94/',
  resume:
    'https://drive.google.com/file/d/1J5_BT40cf3XRIM3yLGePMsLc5FNpsIS5/view?usp=sharing',
};

const buttonClicked = (redirectTo: string) => {
  const url = URL_CONSTANTS[redirectTo];
  if (redirectTo !== 'email') {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
};

const extraButtons = (
  <>
    <StyledButton size="large" key="5" onClick={() => buttonClicked('medium')}>
      <MediumSquareFilled />
      Medium
    </StyledButton>
    <StyledButton size="large" key="4" onClick={() => buttonClicked('email')}>
      <MailFilled />
      Email
    </StyledButton>
    <StyledButton size="large" key="3" onClick={() => buttonClicked('github')}>
      <GithubFilled />
      GitHub
    </StyledButton>
    <StyledButton
      size="large"
      key="2"
      onClick={() => buttonClicked('linkedin')}
    >
      <LinkedinFilled />
      Linkedin
    </StyledButton>
    <StyledButton
      size="large"
      key="1"
      type="primary"
      onClick={() => buttonClicked('resume')}
    >
      <FilePdfFilled />
      Resume
    </StyledButton>
  </>
);

const ProfileSummary: FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isDefinitelyMobile = useMediaQuery({ query: '(max-width: 736px)' });

  return (
    <PageHeader
      title="Jason Wang"
      className="site-page-header"
      subTitle={isDefinitelyMobile ? null : 'Seattle, WA'}
      tags={
        <Tag style={{ fontSize: '14px', lineHeight: '20px' }} color="green">
          Open To Opportunities
        </Tag>
      }
      extra={extraButtons}
      avatar={{
        shape: 'circle',
        size: { md: 40, lg: 64, xl: 80, xxl: 100 },
        src: jason,
      }}
      style={{ paddingTop: '24px' }}
    >
      <Content>
        <Divider style={{ margin: '12px 0' }} />
        <Content>
          <Fade bottom>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {isTabletOrMobile ? (
                <>
                  <Col span={24} className="gutter-row">
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Hello</StyledTitle>
                        <Biography />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide right>
                      <Card>
                        <StyledTitle level={3}>Timeline</StyledTitle>
                        <MyTimeline />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide right>
                      <Card>
                        <StyledTitle level={3}>Showcase</StyledTitle>
                        <Article content={articleData.guidelyte} />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide right>
                      <Card>
                        <StyledTitle level={3}>
                          1st Place @Sachacks2018
                        </StyledTitle>
                        <Article content={articleData.defhacks} />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide right>
                      <Card>
                        <StyledTitle level={3}>
                          1st Place @DefHacks2019
                        </StyledTitle>
                        <Article content={articleData.sachacks} vertical />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Speak With Me</StyledTitle>
                        <Calendly />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Food App</StyledTitle>
                        <Article content={articleData.munchwheel} />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Chat App</StyledTitle>
                        <Article content={articleData.blast} />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Favorite Quotes</StyledTitle>
                        <QuoteList />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Reading List</StyledTitle>
                        <StyledParagraph>
                          See what I&apos;ve been reading.
                        </StyledParagraph>
                        <StyledAnchor href="https://www.notion.so/Reading-List-116054e18e4f423a9ed35d378cc58e09">
                          <StyledImg
                            src="https://user-images.githubusercontent.com/41667764/103757797-1aff7400-4fc6-11eb-8ade-34ef299baa9b.png"
                            alt="top-image"
                          />
                        </StyledAnchor>
                      </Card>
                    </Slide>
                  </Col>
                </>
              ) : (
                <>
                  <Col span={12} className="gutter-row">
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Hello</StyledTitle>
                        <Biography />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Speak With Me</StyledTitle>
                        <Calendly />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Favorite Quotes</StyledTitle>
                        <QuoteList />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Food App</StyledTitle>
                        <Article content={articleData.munchwheel} />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Chat App</StyledTitle>
                        <Article content={articleData.blast} />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide left>
                      <Card>
                        <StyledTitle level={3}>Reading List</StyledTitle>
                        <StyledParagraph>
                          See what I&apos;ve been reading.
                        </StyledParagraph>
                        <StyledAnchor href="https://www.notion.so/Reading-List-116054e18e4f423a9ed35d378cc58e09">
                          <StyledImg
                            src="https://user-images.githubusercontent.com/41667764/103757797-1aff7400-4fc6-11eb-8ade-34ef299baa9b.png"
                            alt="top-image"
                          />
                        </StyledAnchor>
                      </Card>
                    </Slide>
                  </Col>
                  <Col span={12} className="gutter-row">
                    <Slide right>
                      <Card>
                        <StyledTitle level={3}>Timeline</StyledTitle>
                        <MyTimeline />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide right>
                      <Card>
                        <StyledTitle level={3}>TopicSpace</StyledTitle>
                        <Article content={articleData.topicspace} />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide right>
                      <Card>
                        <StyledTitle level={3}>Guidelyte</StyledTitle>
                        <Article content={articleData.guidelyte} />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide right>
                      <Card>
                        <StyledTitle level={3}>
                          1st Place @Sachacks2018
                        </StyledTitle>
                        <Article content={articleData.defhacks} />
                      </Card>
                    </Slide>
                    <Divider />
                    <Slide right>
                      <Card>
                        <StyledTitle level={3}>
                          1st Place @DefHacks2019
                        </StyledTitle>
                        <Article content={articleData.sachacks} vertical />
                      </Card>
                    </Slide>
                  </Col>
                </>
              )}
            </Row>
          </Fade>
        </Content>
      </Content>
    </PageHeader>
  );
};

export default ProfileSummary;
