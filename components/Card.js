import React from 'react';

function Card() {
  return (
    <div className="rounded-md overflow-hidden shadow m-1 	">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Gran_V%C3%ADa_%28Madrid%29_1.jpg/1920px-Gran_V%C3%ADa_%28Madrid%29_1.jpg"
        alt="Mountain"
      ></img>
      <div className="pt-1">
        <div className="font-body text-sm	 font-bold	 mb-2 ">Madrid</div>
        <p className="font-body text-gray-900 text-sm	 ">Spain</p>
      </div>
    </div>
  );
}

export default Card;
