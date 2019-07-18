  
import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';



const Navigation = () => (
  <div>
    <NavigationLinks />
  </div>
);

const NavigationLinks = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.POSTS}>Posts</Link>
    </li>
    <li>
      <Link to={ROUTES.PHOTOS}>Photos</Link>
    </li>
  </ul>
);

export default Navigation;