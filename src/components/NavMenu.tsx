import { Menu } from 'antd';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { QuestionCircleFilled, TrophyFilled, HomeFilled } from '@ant-design/icons';
import styled from 'styled-components';

const StyledMenuItem = styled(Menu.Item)`
  font-size: 16px;
`

const NavMenu: FC = () => {
  const [state, updateState] = useState({current: 'aboutme'})
  const history = useHistory();

  const ROUTER_MAP: any = {
    aboutme: '/',
    ama: '/ama',
    projects: 'projects'
  }

  const handleClick = (e: any) => {
    updateState({ ...state, current: e.key });
    history.push(ROUTER_MAP[e.key])
  };

    const { current } = state;
    return (
      <Menu onClick={handleClick} selectedKeys={[current]} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <StyledMenuItem key="aboutme" icon={<HomeFilled style={{ fontSize: '16px' }} />}>
          <span style={{ border: '2px solid transparent', borderBottomColor: `${current === 'aboutme' ? 'orange' : 'transparent'}` }}>Home</span>
        </StyledMenuItem>
        <StyledMenuItem key="projects" icon={<TrophyFilled style={{ fontSize: '16px' }} />}>
          <span style={{ border: '2px solid transparent', borderBottomColor: `${current === 'projects' ? 'orange' : 'transparent'}` }}>Awards And Projects</span>
        </StyledMenuItem>
        <StyledMenuItem key="ama" icon={<QuestionCircleFilled style={{ fontSize: '16px' }} />}>
          <span style={{ border: '2px solid transparent', borderBottomColor: `${current === 'ama' ? 'orange' : 'transparent'}` }}>Ask Me Anything</span>
        </StyledMenuItem>
        {/* <SubMenu
          key="projects"
          icon={<TrophyFilled />}
          title="Awards and Projects"
        >
          <Menu.ItemGroup title="Awards">
            <Menu.Item key="setting:1">TesselloScore - 1st @DefHacks'19</Menu.Item>
            <Menu.Item key="setting:2">FanScoop - 1st @SacHacks'18</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Projects">
            <Menu.Item key="setting:3">MunchWheel</Menu.Item>
            <Menu.Item key="setting:4">Blast</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
      </Menu>
    );
}

export default NavMenu;