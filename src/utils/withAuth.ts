import { connect } from 'react-redux';

export default function withAuth(WrappedComponent: any) {
  const mapStateToProps = (state: { auth: { token: any; user: any } }) => ({
    token: state.auth.token,
    user: state.auth.user,
  });

  return connect(mapStateToProps)(WrappedComponent);
}
