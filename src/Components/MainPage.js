import { Fragment ,useEffect, useState}  from "react";
import "./MainPage.css";
import Books from "./Books";
import { NavLink } from "react-router-dom";



const MainPage =(props)=>{
    /*const [currentlyReadingBooks, setCurrentlyReadingBooks]= useState([]);
    useEffect(()=>{
        
        console.log('---Mian Page---');
        console.log(props);
        setCurrentlyReadingBooks(test);
    },[]);
*/
 const currentlyReadingBooks = props.booksData.filter((book)=> book.shelf === 'currentlyReading');;
 const wantToReadBooks = props.booksData.filter((book)=>book.shelf==="wantToRead");
 const readBooks = props.booksData.filter((book)=>book.shelf==="read");
 return(
     <Fragment>
        <div>
          <h1 className="header"> My Reads</h1>
          
          <div>
            <h2 className="book-header">Currentely Read</h2>
            <Books books={currentlyReadingBooks} />
           
          </div>
          <div>
           <h2> Want To Read</h2>
           <Books books={wantToReadBooks} />
           
          </div>
          <div>
          <h2 >Read</h2> 
          <Books books={readBooks} />
          </div>
          <div className="search-link">
          <NavLink to='search'>+</NavLink>
          </div>
        </div>
     </Fragment>
 )
}
export default MainPage;