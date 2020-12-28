import React, { FC, useState } from 'react';
import Lightbox from 'react-image-lightbox';
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
  height: 56px;
  width: 56px;
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
  color: var(--color-text-link) !important;
  text-decoration: none;
  line-height: 1.25;
  font-size: 24px;
  font-weight: 300;

  &:hover {
    text-decoration: underline;
  }
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

export const Article: FC = (props: Props) => {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <StyledArticle>
      <StyledAnchor onClick={() => toggleIsOpen(true)}>
        <StyledImg src="https://user-images.githubusercontent.com/41667764/103190801-5e9c0480-4887-11eb-8e99-33b41df2aa77.png" alt/>
      </StyledAnchor>
      <StyledContentDiv>
        <StyledSubHeadingDiv>
          Creating a world where chasing your dreams is exciting, not terrifying.
        </StyledSubHeadingDiv>
        
        <StyledBodyDiv>
          <StyledBodyLeftDiv>
            <StyledBodyLeftAnchor href="https://www.linkedin.com/company/guidelyte">
              <StyledBodyLeftImg src="https://user-images.githubusercontent.com/41667764/103190879-a327a000-4887-11eb-9869-2d4066782151.png" alt="Guidelyte" />
            </StyledBodyLeftAnchor>
          </StyledBodyLeftDiv>

          <StyledBodyRightDiv>
            <StyledBodyRightH1>
            <StyledBodyRightAnchor href="https://github.com/guidelyte">Guidelyte</StyledBodyRightAnchor>
            </StyledBodyRightH1>

            <StyledBodyRightMarkdownDiv>
              <p>Guidelyte is a single source of truth for your job search. We aggregate information scattered across the internet and empower you with the tools to manage all the data around your job search.</p>
            </StyledBodyRightMarkdownDiv>
          </StyledBodyRightDiv>
        </StyledBodyDiv>
      </StyledContentDiv>

      {isOpen && (
        <Lightbox
          mainSrc="https://user-images.githubusercontent.com/41667764/103190801-5e9c0480-4887-11eb-8e99-33b41df2aa77.png"
          onCloseRequest={() => toggleIsOpen(false)}
        />
      )}
    </StyledArticle>
  )
}
