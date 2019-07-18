import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation/Navigation';
import LandingPage from '../LandingPage/LandingPage';
import PostsPage from '../PostsPage/PostsPage';
import PhotosPage from '../PhotosPage/PhotosPage';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />
      <Route path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.POSTS} component={PostsPage} />
      <Route path={ROUTES.PHOTOS} component={PhotosPage} />
    </div>
  </Router>
);

export default App;