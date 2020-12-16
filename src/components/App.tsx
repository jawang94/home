import './App.less';

import { Layout } from 'antd';
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
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
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
          <Footer style={{ textAlign: 'center' }}>Last updated on 12.13.2020 with love.</Footer>
        </Layout>
      </div>
  </Router>
);

export default App;