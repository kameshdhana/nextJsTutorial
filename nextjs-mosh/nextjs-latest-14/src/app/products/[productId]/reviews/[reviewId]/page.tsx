import React from 'react';
import { notFound } from 'next/navigation';
import ReviewNotFound from './not-found';

const ReviewNumber = ({params}:{params:{productId:string,reviewId:string}}) => {
  if(parseInt(params.reviewId)>10){
    // return notFound();
    return ReviewNotFound();
  }
  else{
    return (
      <h1>Review {params.reviewId} for product {params.productId}</h1>
    )
  }
}

export default ReviewNumber