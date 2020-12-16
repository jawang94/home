import './App.less';

import { Layout, Divider } from 'antd';
import React, { FC } from 'react';

import ProfileSummary from './ProfileSummary';
import NavMenu from './NavMenu'
import AMA from './AMA';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Fade } from 'react-reveal'
import { CardList } from './CardList';

const { Header, Content, Footer } = Layout;

const App: FC = () => (
  <Router>
      <div className="App">
        <Layout className="layout">
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Fade>
              <NavMenu />
            </Fade>
          </Header>
          <Content style={{ padding: '32px 50px', margin: '32px auto', maxWidth: '1280px' }}>
            <div className="site-layout-content">
              <Switch>
                <Route path="/ama">
                  <AMA />
                </Route>
                <Route path="/projects">
                  <div className="container">
                    <CardList />
                  </div>
                </Route>
                <Route path="/">
                  <ProfileSummary />
                </Route>
              </Switch>
            </div>
          </Content>
          <Divider style={{ margin: 0 }} />
          <Footer style={{ textAlign: 'center' }}>© 2020 Jason Wang</Footer>
        </Layout>
      </div>
  </Router>
);

export default App;