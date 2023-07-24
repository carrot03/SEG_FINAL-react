import { Link } from 'react-router-dom';
import React from 'react';



const NotFound = () => {
  return (
    <div id='notFound' className='notFound'>
       <div className="text col-md-16 text-center"> 
      <h1>404 - Not Found</h1>
      <p>Emm...The page you are looking for does not exist.</p>
      <p>Let's bring you back to the home page.</p>
      <Link to="/">Go back to Home</Link>
        </div>
    </div>
  );
};

export default NotFound;
