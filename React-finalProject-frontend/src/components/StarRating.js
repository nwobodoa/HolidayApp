import React from 'react';

const SolidStar = () => (<i className="fa-solid fa-star"></i>)
const HalfStar = () => (<i className="fa-solid fa-star-half-stroke"></i>)
const EmptyStar = () => (<i className="fa-regular fa-star"></i>)

const StarRating = ({ rating }) => {
  const total = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = fullStars !== rating
  const emptyStars = hasHalfStar ? total - fullStars - 1 : total - fullStars
 
  return ( <div className="star-rating">
 { Array(fullStars).fill(0).map((_,idx) => <SolidStar key={idx}/>)}
   { hasHalfStar && (<HalfStar/>) }
   {Array(emptyStars).fill(0).map((_,idx)=> <EmptyStar key={idx}/>)}
</div>);
};

export default StarRating;
