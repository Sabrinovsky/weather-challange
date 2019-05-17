import React from "react";
import {Alert} from 'react-bootstrap'

const Error = ({ message }) => {
  return (
    <>
      <Alert variant='danger' className='center-div'>
        <h3>{message}</h3>
      </Alert>
    </>
  );
};
export default Error;
