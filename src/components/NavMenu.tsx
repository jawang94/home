import { Menu } from 'antd';
import React, { FC, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  QuestionCircleOutlined,
  TrophyOutlined,
  HomeOutlined,
  AppleOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const StyledMenuItem = styled(Menu.Item)`
  font-size: 14px;
  font-weight: 600;
`;

const NavMenu: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [state, updateState] = useState({
    current:
      location.pathname === '/' ? 'aboutme' : location.pathname.split('/')[1],
  });
  const { current } = state;

  const ROUTER_MAP: any = {
    aboutme: '/',
    ama: '/ama',
    projects: 'projects',
    latest: 'latest',
  };

  const handleClick = (e: any) => {
    updateState({ ...state, current: e.key });
    history.push(ROUTER_MAP[e.key]);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      theme="dark"
      mode="horizontal"
      style={{ zIndex: 15, backgroundColor: '#24292e' }}
    >
      <StyledMenuItem
        key="aboutme"
        icon={<HomeOutlined style={{ fontSize: '16px' }} />}
      >
        <span
          style={{
            border: '2px solid transparent',
            borderBottomColor: `${
              current === 'aboutme' ? 'orange' : 'transparent'
            }`,
          }}
        >
          Home
        </span>
      </StyledMenuItem>
      <StyledMenuItem
        key="ama"
        icon={<QuestionCircleOutlined style={{ fontSize: '16px' }} />}
      >
        <span
          style={{
            border: '2px solid transparent',
            borderBottomColor: `${
              current === 'ama' ? 'orange' : 'transparent'
            }`,
          }}
        >
          Ask Me Anything
        </span>
      </StyledMenuItem>
      <StyledMenuItem
        key="latest"
        icon={<AppleOutlined style={{ fontSize: '16px' }} />}
      >
        <span
          style={{
            border: '2px solid transparent',
            borderBottomColor: `${
              current === 'latest' ? 'orange' : 'transparent'
            }`,
          }}
        >
          Latest
        </span>
      </StyledMenuItem>
      <StyledMenuItem
        disabled
        key="projects"
        icon={<TrophyOutlined style={{ fontSize: '16px' }} />}
      >
        <span
          style={{
            border: '2px solid transparent',
            borderBottomColor: `${
              current === 'projects' ? 'orange' : 'transparent'
            }`,
          }}
        >
          Awards And Projects
        </span>
      </StyledMenuItem>
    </Menu>
  );
};

export default NavMenu;
