import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { posts as postsActions } from '../../store/actions';

class PostById extends Component {
  // constructor(props){
  //   super(props);
  // }

  // componentWillMount() {
  //   const { getPosts, posts, match } = this.props;
  //   console.log('WillMount')
  //   console.log('popsts Mount', posts);

  //   if (!posts.length) {
  //     console.log('HERE')
  //     getPosts(match.params.id, match.params.id + 5).then(res => {
  //       if (!res[match.params.id]) {
  //         console.log('IF');
  //         this.props.history.push('/posts');
  //       }
  //     });
  //   }
  // }

  componentDidMount() {
    const { getPosts, posts, match } = this.props;
    console.log('DID MOUNT')
    console.log('popsts Mount', posts);

    if (!posts.length) {
      console.log('HERE IF')
      getPosts(0, match.params.id + 5);
      // .then(res => {
      //   if (!res[match.params.id]) {
      //     this.props.history.push('/posts');
      //   }
      // });
    }
  }

  render() {

    const { match, posts,isPostsLoading } = this.props;
    if (isPostsLoading || !posts.length) {
      console.log('MTAV')
      return(<div>SOMETHING IS WRONG</div>)
    }
    const post = posts.filter(obj => {
      return Number(obj.id) === Number(match.params.id);
    })
    console.log('testPOst',post, match.params.id);

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      > 
      {isPostsLoading ? (
          <div>Loading ...</div>
      ): (
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
      )}
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    isPostsLoading: state.posts.isLoading.isPostsLoading
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
