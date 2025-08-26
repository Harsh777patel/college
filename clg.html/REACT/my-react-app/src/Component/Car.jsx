import React from 'react'

const Car = ({brand, model}) => {
  return (
    <>
    <p style={{backgroundColor:"lightcoral"}}> Royal{brand}</p>
    <p style={{backgroundColor:"lightcoral"}}>Harsh{model}</p>
    </>
  );
};

export default Car;