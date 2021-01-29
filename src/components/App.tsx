import './App.less';
import 'react-image-lightbox/style.css';

import { Divider, Layout } from 'antd';
import React, { FC } from 'react';
import { Fade } from 'react-reveal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';

import AMA from './AMA';
import CardList from './CardList';
import NavMenu from './NavMenu';
import ProfileSummary from './ProfileSummary';
import withSplashScreen from './withSplashScreen';
import Latest from './Latest';

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
              <Route path="/latest">
                <div className="container">
                  <Latest />
                </div>
              </Route>
              <Route exact path="/">
                <ProfileSummary />
              </Route>
            </Switch>
          </div>
        </Content>
        <Divider style={{ margin: 0 }} />
        <Footer style={{ textAlign: 'center' }}>
          © 2020 Designed &amp; Developed by Jason Wang
        </Footer>
      </Layout>
      <ScrollUpButton />
    </div>
  </Router>
);

export default withSplashScreen(App);
