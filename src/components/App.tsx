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
import { Fade } from 'react-reveal';
import { CardList } from './CardList';
import ScrollUpButton from "react-scroll-up-button";

const { Header, Content, Footer } = Layout;

const App: FC = () => (
  <Router>
      <div className="App">
        <Layout className="layout">
          <Header>
            <Fade>
              <NavMenu />
            </Fade>
          </Header>
          <Content>
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
                <Route exact path="/">
                  <ProfileSummary />
                </Route>
              </Switch>
            </div>
          </Content>
          <Divider style={{ margin: 0 }} />
          <Footer style={{ textAlign: 'center' }}>© 2020 Designed &amp; Developed by Jason Wang</Footer>
        </Layout>
        <ScrollUpButton />
      </div>
  </Router>
);

export default App;