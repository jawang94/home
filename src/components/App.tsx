import './App.less';

import { Layout } from 'antd';
import React, { FC } from 'react';

import ProfileSummary from './ProfileSummary';
import NavMenu from './NavMenu'

const { Header, Content, Footer } = Layout;

const App: FC = () => (
  <div className="App">
    <Layout className="layout">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <NavMenu />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-content">
          <ProfileSummary />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Last updated on 12.13.2020 with love.</Footer>
    </Layout>
  </div>
);

export default App;