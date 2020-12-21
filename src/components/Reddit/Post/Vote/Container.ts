import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../../../utils/withAuth';
import { attemptVote } from '../../../../actions/posts';
import PostVote from './Component';

const mapDispatchToProps = { attemptVote };

const enhance: any = compose(
  withAuth,
  connect(
    null,
    mapDispatchToProps
  )
);

const PostVoteContainer = enhance(PostVote);

export default PostVoteContainer;
