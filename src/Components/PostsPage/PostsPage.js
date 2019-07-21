import React, { Component } from 'react';
import { connect } from 'react-redux';
import {posts as postsActions} from '../../store/actions';
import axios from 'axios';


class PostsPage extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    console.log('MOUNT')
    getPosts(1, 10);
    // const url = `https://jsonplaceholder.typicode.com/posts`;
    // axios
    //   .get(url, { headers: { 'Content-Type': 'application/json' } })
    //   .then(res => res.data)
    //   .then((data) => console.log('DATA', data))
    //   .catch(e => console.log(e));

  }

  render() {
    const {posts} = this.props;
    console.log('posts',posts);
    return (
      <div>
        {/* {posts.map(post => <div>{post.body}</div>)} */}
        Posts
      </div>
    );
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