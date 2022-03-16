import React from 'react';

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car,index) => <Car key={index} brand={car} />)}
      </ul>
    </>
  );
}

export {Garage};