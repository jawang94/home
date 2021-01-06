import React, {Component} from 'react';
import './splash-screen.css';
import Typical from 'react-typical';
import { PageTransition } from '@steveeeie/react-page-transition';

function LoadingMessage() {
  const steps = [
    'Welcome 👋', 1000,
  ];

  return (
      <PageTransition
      preset="moveToLeftFromRight"
      >
      <div className="splash-screen">
        <div>
          <Typical
            steps={steps}
            loop={1}
            wrapper="h1"
            className="typical-text"
          />
        </div>
        <div className="loading-dot">.</div>
      </div>
    </PageTransition>

  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component<any, any, any> {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1500)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;