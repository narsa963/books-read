import React from "react";

const Books =(props)=>{
  return (
      <div>
      {props.books.map(book=>{
        return(
          <div>
          <div className="book-grid"> { book.imageLinks && book.imageLinks.smallThumbnail && 
          <img src={book.imageLinks.smallThumbnail}/> }
          </div>
          <p>{book.title}</p>
          </div>
        )
      })}
    </div>   
  )
}
export default Books;