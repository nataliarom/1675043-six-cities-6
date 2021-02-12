import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {


  return (
    <>
      <h1>404 Not Found</h1>
      <Link to="/">Go to main page</Link>
    </>
  );
};

export default PageNotFound;
