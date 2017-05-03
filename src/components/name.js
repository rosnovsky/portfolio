import React from 'react';

const Name = (props) => {
  return (
    <div className="row title">
    	<h1>{props.name}</h1>
    	<h3>{props.position}</h3>
  	</div>
  	)
}


export default Name;
