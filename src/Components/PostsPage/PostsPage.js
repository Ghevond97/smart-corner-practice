import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { posts as postsActions } from '../../store/actions';

import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import PostById from '../PostById/PostById';

// const SubRoutes = (match) => {
//   return(
// <Route path={`${match.path}/:topicId`} component={() => (<PostById id={id}/>)} />
// )

//}

const PostId = ({ match }) => {
  console.log('POSTID');
  return <h2>{match.params.postId}</h2>;
};

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditModal: false,
      showDeleteModal: false,
      selectedRowIndex: null,
      editPostTitle: '',
      editPostDescription: '',
    };
  }

  show = () => {
    console.log('SHOW');
    this.setState({ showDeleteModal: true });
  };

  showEdit = () => {
    this.setState({ showEditModal: true });
  };

  hide = () => {
    this.setState({ showDeleteModal: false });
  };
  hideEdit = () => {
    this.setState({ showEditModal: false });
  };

  delete = index => {
    console.log('delete');
    const { deletePost, posts } = this.props;
    let updatedPosts = posts;
    delete updatedPosts[index];
    deletePost(updatedPosts);
  };

  editPostSubmit(index) {
    const { editPost, posts } = this.props;
    console.log('index', index);
    let updatedPosts = posts;
    updatedPosts[index].title = this.state.editPostTitle;
    updatedPosts[index].body = this.state.editPostDescription;
    editPost(updatedPosts);
  }

  handleInputChange(event) {
    const target = event.target;
    console.log('TARGET', target);
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    this.setState({ [event.target.name]: event.target.value });
  }

  setSelectedRowIndex = index => {
    console.log('index', index);
    this.setState({ selectedRowIndex: index });
  };

  componentDidMount() {
    const { getPosts } = this.props;
    console.log('MOUNT');
    getPosts(1, 10);
  }

  render() {
    const { posts, match } = this.props;
    const { selectedRowIndex } = this.state;
    console.log('posts', posts);
    return (
      <div>
        <MDBTable>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>#</th>
              <th>id</th>
              <th>title</th>
              <th>description</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {posts.map((post, index) => {
              return (
                <tr>
                  <td>
                    <Link to={`${match.url}/${post.id}`}>{index}</Link>
                  </td>
                  <td>
                    <Link to={`${match.url}/${post.id}`}>{post.id}</Link>
                  </td>
                  <td>
                    <Link to={`${match.url}/${post.id}`}>{post.title}</Link>
                  </td>
                  <td>
                    <Link to={`${match.url}/${post.id}`}>{post.body}</Link>
                  </td>
                  <td>
                    <MDBBtn
                      href="#"
                      onClick={() => {
                        this.setSelectedRowIndex(index);
                        this.showEdit();
                      }}
                    >
                      Edit
                    </MDBBtn>
                  </td>
                  <td>
                    <MDBBtn
                      href="#"
                      onClick={() => {
                        this.setSelectedRowIndex(index);
                        this.show();
                      }}
                    >
                      Delete
                    </MDBBtn>
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
        <Rodal
          visible={this.state.showEditModal}
          onClose={() => this.hideEdit()}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <form>
            <input
              type="text"
              name="editPostTitle"
              placeholder="edit title"
              onChange={event => this.handleInputChange(event)}
              style={{ width: '100%', marginTop: '5%' }}
            />

            <input
              type="text"
              name="editPostDescription"
              placeholder="edit description"
              onChange={event => this.handleInputChange(event)}
              style={{ width: '100%', marginTop: '5%' }}
            />
          </form>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5%',
            }}
          >
            <MDBBtn
              href="#"
              onClick={() => {
                this.editPostSubmit(selectedRowIndex);
                this.hideEdit();
              }}
            >
              Save
            </MDBBtn>
            <MDBBtn href="#" onClick={() => this.hideEdit()}>
              Cancel
            </MDBBtn>
          </div>
        </Rodal>
        <Rodal visible={this.state.showDeleteModal} onClose={() => this.hide()}>
          <div>Are you sure you want to delete ?</div>
          <MDBBtn
            href="#"
            onClick={() => {
              this.delete(selectedRowIndex);
              this.hide();
            }}
          >
            Delete
          </MDBBtn>
          <MDBBtn href="#" onClick={() => this.hide()}>
            Cancel
          </MDBBtn>
        </Rodal>
        {/* <PostById /> */}
        {console.log('match', match)}

        {/* <Route path={`${match.url}/:postId`} componet={PostId} /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: (start, limit) => dispatch(postsActions.getPosts(start, limit)),
    deletePost: index => dispatch(postsActions.deletePost(index)),
    editPost: index => dispatch(postsActions.editPost(index)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage);
