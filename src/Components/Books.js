import React from "react";
const Books =(props)=>{
  const selectHandler=(book,event)=>{
    props.updateShelf(event, book);
    console.log(book);
  }
  return (
      <div>
      {props.books.map(book=>{
        return(
          <div className="book-rack">
          <div className="book-grid"> { book.imageLinks && book.imageLinks.smallThumbnail && 
          <img src={book.imageLinks.smallThumbnail} alt='book-img' /> }
          
          <select className="select-option" onChange={event=>selectHandler(book, event)}>
            <option>Moveto...</option>
            <option value = "wantToRead">want to read</option>
            <option value = "currentlyReading">currently Read</option>
            <option value = "read">Read</option>
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