import React from 'react'
import styled from 'styled-components';

const StyledArticle = styled.article`
  margin-top: 24px !important;
  margin-bottom: 24px !important;
  border-radius: 6px !important;
  margin-top: 24px !important;
  margin-bottom: 24px !important;
  background-color: var(--color-bg-primary) !important;
  box-shadow: var(--color-shadow-small) !important;
  border-radius: 4px !important;
  border: 1px solid var(--color-border-primary)) !important;
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
  border-style: none !important;
`

const StyledContentDiv = styled.div`
  padding: 16px !important;
`

const StyledSubHeadingDiv = styled.div`
  margin-bottom: 16px !important;
  font-size 12px !important;
  color: var(--color-text-secondary) !important;
`

const StyledBodyDiv = styled.div`
  display: flex !important;
`

const StyledBodyLeftDiv = styled.div`
  margin-left: 8px !important;
  margin-right: 24px !important;
`

const StyledBodyLeftAnchor = styled.a`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-canvas);
  border-radius: 50%;
  box-shadow: var(--color-shadow-medium);
`

const StyledBodyLeftImg = styled.img`
  max-width: 60%!important;
  height: auto!important;
  max-height: 55%!important;
`

const StyledBodyRightDiv = styled.div`
  flex: auto;
`

const StyledBodyRightH1 = styled.h1`
  margin-bottom: 8px;
  margin-top 4px;
  line-height: 1.25;
  font-size 24px;
  font-weight: 300;
  color: var(--color-text-primary) !important;
`

const StyledBodyRightAnchor = styled.a`
  color: var(--color-text-link);
  text-decoration: none;
  line-height: 1.25;
  font-size: 24px;
  font-weight: 300;
  color: var(--color-text-primary) !important;
`

const StyledBodyRightMarkdownDiv = styled.div`
  margin-bottom: 8px !important;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  color: var(--color-text-secondary) !important;
`

interface Props {
  
}

export const Article = (props: Props) => {
  return (
    <StyledArticle>
      <StyledAnchor>
        <StyledImg src="https://marketplace-screenshots.githubusercontent.com/4693/07293800-a0d9-11e9-8f11-d63647851f04" alt/>
      </StyledAnchor>
      <StyledContentDiv>
        <StyledSubHeadingDiv>
          App recommended by Github
        </StyledSubHeadingDiv>
        
        <StyledBodyDiv>
          <StyledBodyLeftDiv>
            <StyledBodyLeftAnchor>
              <StyledBodyLeftImg src="https://avatars0.githubusercontent.com/ml/4693?s=400&v=4" alt="CommitCheck" />
            </StyledBodyLeftAnchor>
          </StyledBodyLeftDiv>

          <StyledBodyRightDiv>
            <StyledBodyRightH1>
            <StyledBodyRightAnchor href="https://github.com/marketplace/commitcheck">CommitCheck</StyledBodyRightAnchor>
            </StyledBodyRightH1>

            <StyledBodyRightMarkdownDiv>
              <p>CommitCheck ensures your commit messages are consistent and contain all required information. You can check that commits contain a JIRA number or ensure commits don't contain WIP.</p>
            </StyledBodyRightMarkdownDiv>
          </StyledBodyRightDiv>
        </StyledBodyDiv>
      </StyledContentDiv>
    </StyledArticle>
  )
}
