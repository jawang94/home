import { Card, Row, Typography, Image, Divider } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';
import Latest1 from '../latest.png';
import Latest2 from '../latest2.png';
import Latest3 from '../latest3.png';

const { Paragraph, Title } = Typography;
const StyledParagraph = styled(Paragraph)`
  margin-bottom: 8px !important;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  color: var(--color-text-secondary) !important;
`;

const StyledImg = styled.img`
  display: block !important;
  margin-right: auto !important;
  margin-left: auto !important;
  max-width: ${(props: any) => props.theme.maxWidth} !important;
  max-height: 50% !important;
  border-style: none !important;
  border-radius: 10;
`;

export default function Latest() {
  return (
    <Card
      style={{
        padding: 15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Row style={{ flexDirection: 'column' }}>
        <Title level={1}>
          Latest
          <Title level={3}>
            Learn | Engage | Create
            <Title type="secondary" level={5}>
              Available in the App Store February 2021
            </Title>
          </Title>
        </Title>

        <Row>
          <StyledImg
            src={Latest1}
            alt="top-image"
            theme={{ maxWidth: '25%' }}
          />
          <StyledImg
            src={Latest2}
            alt="top-image"
            theme={{ maxWidth: '25%' }}
          />
          <StyledImg
            src={Latest3}
            alt="top-image"
            theme={{ maxWidth: '25%' }}
          />
        </Row>
        <Divider />
        <Title level={4}>The Platform</Title>
        <StyledParagraph>
          Latest is a knowledge sharing platform for experts and skill-seekers
          to collect, connect, and level up.
        </StyledParagraph>
        <Title level={4}>Our Mission</Title>
        <StyledParagraph>
          Democratize knowledge and foster communities of high quality education
          and healthy discussion.
        </StyledParagraph>
        <Title level={4}>Our Vision</Title>
        <StyledParagraph>
          Break down barriers of learning and modernize education. Those with
          knowledge should have somewhere to teach and those seeking knowledge
          should have somewhere to learn. No toxicity, no spam, no politics.
        </StyledParagraph>
        <Title level={2}>
          We want to see people learn, grow, and create the better future we all
          deserve. Stop complaining, start learning.
        </Title>
      </Row>
    </Card>
  );
}
