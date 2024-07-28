import React from "react";

const Rating = ({ rating }) => {
  const ratingArray = new Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }

  return (
    <>
      {ratingArray.map((ratingvalue,index) =>
        ratingvalue ? (
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" key={index}></i>
        ) : (
          <i className="text-lg bi bi-star text-yellow-500 mr-1" key={index}></i>
        )
      )}
    </>
  );
};

export default Rating;
