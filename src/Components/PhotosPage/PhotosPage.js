import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


import {photos as photosActions} from '../../store/actions';


class PhotosPage extends Component {
  componentDidMount() {
    const {getPhotos} = this.props;
    console.log('MOUNT')
    getPhotos(1,10);
  }

  render() {
    const {photos} = this.props;
    return (
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {photos.map(photo => {
          return(<MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src={`${photo.url}`} waves />
              <MDBCardBody>
                <MDBCardTitle>{photo.title}</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>)
       
    })}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
   photos: state.photos.photos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPhotos: (start, limit) =>  dispatch(photosActions.getPhotos(start, limit))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);