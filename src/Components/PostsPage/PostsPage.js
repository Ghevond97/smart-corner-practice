import React, { Component } from 'react';
import { connect } from 'react-redux';
import {posts as postsActions} from '../../store/actions';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';



class PostsPage extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    console.log('MOUNT')
    getPosts(1, 10);
  }

  render() {
    const {posts} = this.props;
    console.log('posts',posts);
    return (
      <div>
        <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>title</th>
          <th>description</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {posts.map((post, index) => {
          return (
            <tr>
          <td>{index}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>    
          );
          }
          )
        }
      </MDBTableBody>
    </MDBTable>
        Posts
      </div>)
}
}

function mapStateToProps(state) {
  return {
   posts: state.posts.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: (start, limit) =>  dispatch(postsActions.getPosts(start, limit))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);