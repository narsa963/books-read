import React, {Fragment, useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from "./Components/MainPage";
import SearchPage from './Components/SearchPage'


function App() {
  const [allBooks, setAllBooks]= useState([]);
  
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
 
const updateBook=(e, book)=>{
  console.log(e.target.value);
   let newShelf = e.target.value;
   console.log(e.target.value);
   fetch('https://reactnd-books-api.udacity.com/books/'+book.id, {method:'PUT',
      headers : {
        Authorization:"1inewfsl",
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        shelf : newShelf
      })
    }).then(res=>res.json()).then(result=>{
      
      console.log(result);
    })
}

  return (
  <Routes>
  <Route path='/' element={<MainPage booksData={allBooks} onFilter={updateBook} /> } />
  <Route path='/search' element={<SearchPage />} />
  
  </Routes>
   
  );
}

export default App;
