import React, { Component } from 'react';
import './splash-screen.css';
import Typical from 'react-typical';

function LoadingMessage() {
  const steps = ['Welcome 👋', 1000];

  return (
    <div className="splash-screen">
      <div>
        <Typical steps={steps} loop={1} wrapper="h1" className="typical-text" />
      </div>
      <div className="loading-dot">.</div>
    </div>
  );
}

function withSplashScreen(WrappedComponent: any) {
  return class extends Component<any, any, any> {
    constructor(props: any) {
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
        }, 1500);
      } catch (err) {
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      const { loading } = this.state;
      // while checking user session, show "loading" message
      if (loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;
