import React from 'react';
import { Provider } from 'react-redux'
import initializeStore from '../../store/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation/Navigation';
import LandingPage from '../LandingPage/LandingPage';
import PostsPage from '../PostsPage/PostsPage';
import PhotosPage from '../PhotosPage/PhotosPage';

const store = initializeStore();

const App = () => (
  <Provider store={store}>
    <Router>
    <div>
      <Navigation />

      <hr />
      <Route path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.POSTS} component={PostsPage} />
      <Route path={ROUTES.PHOTOS} component={PhotosPage} />
    </div>
  </Router>
  </Provider>
  
);

export default App;