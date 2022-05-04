import { useEffect, useState } from "react";
import Books from "./Books"

const SearchPage= (props)=>{
    const [searchBook, setSearchBook]=useState('');
    const [resultBooks, setResultBooks]=useState([]);

    useEffect(()=>{
       
    }, [searchBook])

    const searchHandler=(event)=>{
        setSearchBook(event.target.value);
    }
  const submitHandler = (event)=>{
      event.preventDefault();
      console.log('inside submit');
        const data = {
            query:searchBook
        }; 

        fetch('https://reactnd-books-api.udacity.com/search',{method:"POST",
        headers : {
        Authorization:"1inewfsl1",
        Accept: "application/json",
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }
        ).then(res=>res.json()).then(result=>{
            console.log(result);
            setResultBooks(result.books)
        })
      
  }

    return(
     <div>
       <input
         className="search-bar"
        onChange={searchHandler} 
        type='text' 
        placeholder="search book"  
        value={searchBook}   
       />
     <button onClick={submitHandler}>Submit</button>
     <Books books={resultBooks} />

    </div>
    )
}
export default SearchPage;