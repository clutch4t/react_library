import './App.css';
import { useEffect, useState } from 'react'
import { checkForID, addAnElement, editAnElement, issueABook, deleteAnElement } from './store/booksSlice';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  let books = useSelector((state) => state.library.books);
  let renewedID = useSelector((state) => state.library.renewedID)
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [dateOfIssue, setDateOfIssue] = useState();
  const [issued, setIssued] = useState();
  const wholeBook = []
  let editedTitle = ""

  return (
    <div className="App">
      <div className='input_container'>
        <input type='text' id='title' placeholder='Enter the title...' onChange={(event) => { setTitle(event.target.value) }} />
        <input type='text' id='author' placeholder='Enter the author...' onChange={(event) => { setAuthor(event.target.value) }} />
        <input type='text' id='dateOfIssue' placeholder='Enter the date of issue...' onChange={(event) => { setDateOfIssue(event.target.value) }} />
        <div>Issued: <input type='checkbox' onChange={(event) => { setIssued(event.target.checked ? true : false) }} /></div>
        <button type='button' className='addBtn' onClick={() => { dispatch(checkForID()); wholeBook.push({ id: renewedID, title: title, author: author, dateOfIssue: dateOfIssue, status: issued }); dispatch(addAnElement(wholeBook)); }}>Add</button>


      </div>
      <div className='books_container'>
        {
          books.map((value, i) => {
            if (!value.status) {
              return (
                <div className='book_item' key={i}>
                  <div className='book_item_left'>
                    <div className='book_item_left_top'>
                      <h2>Title: {value.title}</h2>
                    </div>
                    <div className='book_item_left_bottom'>
                      <h5>Date of issue: {value.dateOfIssue}</h5>
                      <h5>Author: {value.author}</h5>
                    </div>
                  </div>
                  <div className='book_item_right'>
                    <button type='button' className="actionBtn issue" onClick={(event) => { event.target.classList.toggle("issued"); dispatch(issueABook([value.id, value.status])) }}>Issue</button>
                    <button type='button' className='actionBtn edit' onClick={() => { editedTitle = prompt("Enter the edited version of the title"); dispatch(editAnElement([value.id, value.title, editedTitle])) }}>Edit</button>
                    <button type='button' className="actionBtn delete" onClick={() => { dispatch(deleteAnElement(value.id)) }}>Delete</button>
                  </div>
                </div>
              )
            } else {
              return (
                <div className='book_item' key={i}>
                  <div className='book_item_left'>
                    <div className='book_item_left_top'>
                      <h2>Title: {value.title}</h2>
                    </div>
                    <div className='book_item_left_bottom'>
                      <h5>Date of issue: {value.dateOfIssue}</h5>
                      <h5>Author: {value.author}</h5>
                    </div>
                  </div>
                  <div className='book_item_right'>
                    <button type='button' className="actionBtn issue issued" onClick={(event) => { event.target.classList.toggle("issued"); dispatch(issueABook([value.id, value.status])) }}>Issue</button>
                    <button type='button' className='actionBtn edit' onClick={() => { editedTitle = prompt("Enter the edited version of the title"); dispatch(editAnElement([value.title, editedTitle])) }}>Edit</button>
                    <button type='button' className="actionBtn delete" onClick={() => { dispatch(deleteAnElement(value.id)) }}>Delete</button>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </div >
  );
}

export default App;
