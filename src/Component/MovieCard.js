import React from 'react';
import {Card} from "react-bootstrap";
import Rate from './Rate';
import {Link} from 'react-router-dom'

export default function MovieCard({movie,deletCard,seen}) {
  return (
    <div className='cardContainer'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.imgUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Rate rate={movie.rate} />
        <button onClick={()=>deletCard(movie.id)}>delete card</button>
      <button  onClick={()=>seen(movie.id)} >  {movie.isDone ? 'seen' : 'not yet '}  </button>
      <button><Link to={`/MovieList/${movie.id}`}> Samsoum</Link > </button>      </Card.Body>
    </Card>
    </div>
  )
}


  