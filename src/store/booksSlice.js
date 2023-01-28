import { createSlice } from '@reduxjs/toolkit'

export const booksSlice = createSlice({
    name: 'library',
    initialState: {
        books: [
            {
                id: 1,
                title: "War and Peace",
                author: "L. Tolstoy",
                dateOfIssue: "02/12/2021",
                status: false
            },
            {
                id: 2,
                title: "Harry Potter and Philosopher's Stone",
                author: "J.K. Rowling",
                dateOfIssue: "06/13/2017",
                status: false
            },
            {
                id: 3,
                title: "Thick and Thin",
                author: "A. Chekhov",
                dateOfIssue: "11/12/2021",
                status: true
            },
        ],
        renewedID: 0
    },

    reducers: {
        checkForID(state) { state.books.length < 1 ? state.renewedID = 1 : state.renewedID++ },
        addAnElement(state, action) { let joined = state.books.concat(action.payload); state.books = joined },
        editAnElement(state, action) { state.books.forEach((element) => { if (element.id == action.payload[0] && element.title == action.payload[1]) { element.title = action.payload[2] } }) },
        issueABook(state, action) { state.books.forEach((element) => { if (element.id == action.payload[0]) { if (element.status == action.payload[1]) { element.status = !action.payload[1] } else { element.status = action.payload[1] } } }); },
        deleteAnElement(state, action) { state.books = state.books.filter((element) => element.id != action.payload) }
    },
})

export const { checkForID, addAnElement, editAnElement, issueABook, deleteAnElement } = booksSlice.actions

export default booksSlice.reducer