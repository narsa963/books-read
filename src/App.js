import React, {Fragment, useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from "./Components/MainPage";
import SearchPage from './Components/SearchPage'


function App() {
  const [allBooks, setAllBooks]= useState([])
  
  useEffect(()=>{
    fetch('https://reactnd-books-api.udacity.com/books', {method:'GET',
  headers : {
    Authorization:"1inewfsl",
    Accept: "application/json"
  }}
    ).then(res=>res.json()).then(result=>{
      
      console.log(result);
      setAllBooks(result.books);
    })
    
},[])



  return (
  <Routes>
  <Route path='/' element={<MainPage booksData={allBooks} /> } />
  <Route path='/search' element={<SearchPage />} />
  
  </Routes>
   
  );
}

export default App;
