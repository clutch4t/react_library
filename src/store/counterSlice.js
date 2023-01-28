import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
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
        ]
    },

    reducers: {
        addAnElement(state, action) { state.books.push(action.payload) },
        deleteAnElement(state, action) { state.books = state.books.filter((element) => element.id != action.payload) }

    },
})

export const { addAnElement, deleteAnElement } = counterSlice.actions

export default counterSlice.reducer