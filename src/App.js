
import './App.css';

import MovieList from './Component/MovieList';
import Add from './Component/Add';
import Filter from './Component/Filter';
import Navbarr from './Component/Navbar';
import {movies} from './Movies';
import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import UniqueElement from './Component/UniqueElement';


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


 //function 
 const deletCard=(ID)=>{
  setmovieList(
    movieList.filter((e)=> e.id !== ID)
  )
}

const seen=(ID)=>{
  setmovieList(
    movieList.map((el)=> (el.id === ID ? {...el,isDone : !el.isDone }: el ) )
  )
}


  console.log(movieList)
  return (
    <div className="App">
      <Navbarr/>
      
      <Routes>
    
     <Route path='/MovieList' element= { <MovieList  movieList={movieList}  deletCard={deletCard} rate={rate}  seen={seen} search={search}/>} />

     <Route path='/Add' element={<Add Add={Add}/>}/>
     <Route path='/MovieList/:ID' element={<UniqueElement />}/>
     </Routes>
    
    </div>
  );
}

export default App;
  

