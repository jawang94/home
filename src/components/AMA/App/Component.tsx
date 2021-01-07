import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import theme from '../../../theme';
import GlobalStyle from '../../../globalStyle';
import HeaderContainer from '../Header/Container';
import ErrorNotificationContainer from '../ErrorNotification/Container';
import LoginFormContainer from '../LoginForm/Container';
import SignupFormContainer from '../SignupForm/Container';
import CreatePostFormContainer from '../CreatePostForm/Container';
import Home from '../Home';

const App = ({ dark }) => (
  <ThemeProvider theme={theme(dark)}>
    <div style={{ width: '990px' }}>
      <GlobalStyle />
      <Route component={HeaderContainer} />
      <Route component={ErrorNotificationContainer} />
      <Switch>
        <Route path="/ama/login" component={LoginFormContainer} />
        <Route path="/ama/signup" component={SignupFormContainer} />
        <Route path="/ama/createpost" component={CreatePostFormContainer} />
        <Route path="/ama" component={Home} />
      </Switch>
    </div>
  </ThemeProvider>
);

export default App;
