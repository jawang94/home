import { Menu } from 'antd';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { QuestionCircleFilled, SmileFilled, TrophyFilled } from '@ant-design/icons';

const NavMenu: FC = () => {
  const [state, updateState] = useState({current: 'mail'})
  const history = useHistory();

  const ROUTER_MAP: any = {
    mail: '/',
    app: '/ama',
    projects: 'projects'
  }

  const handleClick = (e: any) => {
    console.log('click ', e);
    updateState({ ...state, current: e.key });
    history.push(ROUTER_MAP[e.key])
  };

    const { current } = state;
    return (
      <Menu onClick={handleClick} selectedKeys={[current]} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="mail" icon={<SmileFilled />}>
          About Me
        </Menu.Item>
        <Menu.Item key="app" icon={<QuestionCircleFilled />}>
          AMA
        </Menu.Item>
        <Menu.Item key="projects" icon={<TrophyFilled />}>
          Awards And Projects
        </Menu.Item>
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