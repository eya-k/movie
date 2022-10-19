import React from 'react'

export default function Rate({rate, setrate}) {

const arrStar =[1,2,3,4,5]

  return (
    <div className='RateContainer'>
{
    arrStar.map( (el)=>(
   <button onClick={ ()=>{setrate(el)} }>{el <= rate ? (<i class="fa-solid fa-star"></i>) : (<i class="fa-regular fa-star"></i>  )}</button>
))}
    </div>
  );
}
