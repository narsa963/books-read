import React from "react";

const Books =(props)=>{
  return (
      <div>
      {props.books.map(book=>{
        return(
          <div className="book-rack">
          <div className="book-grid"> { book.imageLinks && book.imageLinks.smallThumbnail && 
          <img src={book.imageLinks.smallThumbnail} alt='book-img' /> }
          <select className="select-option">
            <option>want to read</option>
            <option>currentely Read</option>
            <option>Read</option>
            <option>none</option>
          </select>
          </div>
          <p className="content">{book.title}</p>
          </div>
        )
      })}
    </div>   
  )
}
export default Books;