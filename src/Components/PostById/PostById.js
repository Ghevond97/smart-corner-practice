import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


class PostById extends Component {
  // constructor(props){
  //   super(props);
  // }
  componentDidMount() {
    console.log("MOUNT")
  }

  render() {
    const {match, posts} = this.props;
    console.log('posts', posts);
    console.log('match.id', match.params.id);
    return(
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
          <td>{posts[match.params.id].id}</td>
          <td>{posts[match.params.id].title}</td>
          <td>{posts[match.params.id].body}</td>
          {/* <td>@mdo</td> */}
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
  };
}


export default  connect(mapStateToProps, ()=>({}))(PostById);