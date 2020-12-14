import { Menu } from 'antd';
import React, { Component } from 'react';

import { QuestionCircleFilled, SmileFilled, TrophyFilled } from '@ant-design/icons';

const { SubMenu } = Menu;

export default class NavMenu extends Component {
  state = {
    current: 'mail',
  };

  handleClick = (e: any) => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="mail" icon={<SmileFilled />}>
          About Me
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<QuestionCircleFilled />}>
          AMA
        </Menu.Item>
        <SubMenu
          key="SubMenu"
          icon={<TrophyFilled />}
          title="My Projects"
        >
          <Menu.ItemGroup title="Award Winning">
            <Menu.Item key="setting:1">TesselloScore - 1st @DefHacks2019</Menu.Item>
            <Menu.Item key="setting:2">FanScoop - 1st @SacHacks2018</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Fun Stuff">
            <Menu.Item key="setting:3">MunchWheel</Menu.Item>
            <Menu.Item key="setting:4">Blast</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

