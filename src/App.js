
import './App.css';

import MovieList from './Component/MovieList';
import Add from './Component/Add';
import Filter from './Component/Filter';
import Navbarr from './Component/Navbar';
import {movies} from './Movies';
import { useState } from 'react';

//console.log(movies);



function App() {
  const [movieList, setmovieList] = useState(movies)

//adding movie
const addHandler=(newMovie)=>{
  setmovieList(
[...movieList, newMovie]
  )
}
//get the data from the user(movie title)
const [search, setsearch] = useState("")


//get the data from the user(movie rate)
const [rate, setrate] = useState(1)


  console.log(movieList)
  return (
    <div className="App">
      <Navbarr/>
      <Filter setsearch={setsearch}  setrate={setrate} rate={rate}/>
      <Add  addHandler={addHandler} />
      <MovieList movieList={movieList} search={search}  rate={rate} />
    </div>
  );
}

export default App;
