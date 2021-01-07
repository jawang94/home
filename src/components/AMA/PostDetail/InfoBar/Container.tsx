import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../../../utils/withAuth';
import { attemptDeletePost } from '../../../../actions/posts';
import PostDetailInfoBar from './Component';

const mapDispatchToProps = { attemptDeletePost };

const enhance: any = compose(withAuth, connect(null, mapDispatchToProps));

const PostDetailInfoBarContainer = enhance(PostDetailInfoBar);

export default PostDetailInfoBarContainer;
