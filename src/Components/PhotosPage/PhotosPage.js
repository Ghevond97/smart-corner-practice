import React, { Component } from 'react';
import axios from 'axios';

class PhotosPage extends Component {
  componentDidMount() {
    console.log('MOUNT')
    const url = `https://jsonplaceholder.typicode.com/photos`;
    axios
      .get(url, { headers: { 'Content-Type': 'application/json',  range: 'bytes=0-10' } })
      .then(res => res.data)
      .then((data) => console.log('DATA', data))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        Photos
      </div>
    );
  }
}

export default PhotosPage;