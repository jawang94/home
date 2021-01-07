/* eslint-disable react/no-will-update-set-state */
import React from 'react';
import styled from 'styled-components/macro';
import PostVoteUpvote from './Upvote';
import PostVoteDownvote from './Downvote';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  padding: 4px;
  font-size: 12px;
  line-height: 25px;
  font-weight: 500;
  text-align: center;
  color: ${(props: { theme: { normalText: any } }) => props.theme.normalText};
`;

class PostVote extends React.Component<any, any, any> {
  static existingVote({ user, votes }: any) {
    const existingVote =
      user &&
      votes &&
      votes.find((vote: { user: any }) => vote.user === user.id);
    return existingVote ? existingVote.vote : 0;
  }

  constructor(props: any) {
    super(props);
    const didVote = PostVote.existingVote(props);
    this.state = {
      score: props.score,
      didVote,
      didUpvote: didVote === 1,
      didDownvote: didVote === -1,
    };
  }

  UNSAFE_componentWillUpdate(
    nextProps: any,
    _nextState: any,
    _nextContext: any
  ): any {
    if (this.props.score !== nextProps.score) {
      const didVote = PostVote.existingVote(nextProps);
      this.setState({
        score: nextProps.score,
        didVote,
        didUpvote: didVote === 1,
        didDownvote: didVote === -1,
      });
    } else if (this.props.token !== nextProps.token && !nextProps.token) {
      this.setState({
        didVote: false,
        didUpvote: false,
        didDownvote: false,
      });
    }
  }

  upvote() {
    this.castVote(this.state.didUpvote ? 0 : 1);
  }

  downvote() {
    this.castVote(this.state.didDownvote ? 0 : -1);
  }

  castVote(vote: number) {
    const { attemptVote, id, token } = this.props;
    if (token) {
      attemptVote(id, vote);
      this.setState({
        // eslint-disable-next-line react/no-access-state-in-setstate
        score: this.state.score + vote - this.state.didVote,
        didVote: vote,
        didUpvote: vote === 1,
        didDownvote: vote === -1,
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <PostVoteUpvote
          canVote={!!this.props.token}
          didVote={this.state.didUpvote}
          onClick={this.upvote}
        />
        <span>{this.state.score}</span>
        <PostVoteDownvote
          canVote={!!this.props.token}
          didVote={this.state.didDownvote}
          onClick={this.downvote}
        />
      </Wrapper>
    );
  }
}

export default PostVote;
