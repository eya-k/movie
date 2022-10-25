import React from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import {movies} from '../Movies'
const UniqueElement = () => {
console.log('movieddddd',movies)
    const {ID}=useParams();
const film=movies.find((el)=>el.id===Number(ID))
 console.log('film',film)
  return (
    <div>
        <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={film.imgUrl} /> 
    <Card.Body>
     <Card.Title>{film.title}</Card.Title> 
      <Card.Text>
       {film.description} 
      </Card.Text>


    </Card.Body>
  </Card>
    </div>
  )
}

export default UniqueElement