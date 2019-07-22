import React, { Component } from 'react';
import { Provider } from 'react-redux';
import initializeStore from '../../store/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation/Navigation';
import LandingPage from '../LandingPage/LandingPage';
import PostsPage from '../PostsPage/PostsPage';
import PhotosPage from '../PhotosPage/PhotosPage';
import NavbarPage from '../Navigation/NavBar';
import PostById from '../PostById/PostById';
// import PostById from '../PostById/PostById';

const store = initializeStore();

const aasaaa = () => {
  return <div>asfasfasfasfaws1</div>;
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            {/* <Navigation /> */}
            <NavbarPage />
            <hr />
            <Route path='/posts/:id' component={PostById} />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.POSTS} component={PostsPage} />
            <Route path={ROUTES.PHOTOS} component={PhotosPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
