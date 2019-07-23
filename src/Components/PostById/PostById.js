import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { posts as postsActions } from '../../store/actions';

class PostById extends Component {
  componentDidMount() {
    const { getPosts, posts, match } = this.props;

    if (!posts.length) {
      getPosts(0, match.params.id + 5);
    }
  }

  render() {
    const { match, posts, isPostsLoading } = this.props;
    if (isPostsLoading || !posts.length) {
      return <div>Loading...</div>;
    }
    const post = posts.filter(obj => {
      return Number(obj.id) === Number(match.params.id);
    });

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>{post[0].id}</td>
              <td>{post[0].title}</td>
              <td>{post[0].body}</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    isPostsLoading: state.posts.isLoading.isPostsLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: (start, limit) => dispatch(postsActions.getPosts(start, limit)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostById));
