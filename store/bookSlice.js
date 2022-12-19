import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    books: [],
    book: {},
    author: {},
    publisher: {},
    status: {},
};

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBooks: (state, { payload }) => {
            state.books = payload;
        },
        setBook: (state, { payload }) => {
            state.book = payload;
        },
        resetBook: (state) => {
            state.book = {};
        },
        setAuthor: (state, { payload }) => {
            state.author = payload;
        },
        setPublisher: (state, { payload }) => {
           state.publisher = payload;
        },
        setStatus: (state, { payload }) => {
            state.status = payload;
        },
        resetBookProps: (state) => {
            state.author = {};
            state.publisher = {};
            state.status = {};
        },
    },
});

export const { setBooks, setBook, resetBook, setAuthor, setPublisher, setStatus, resetBookProps } = bookSlice.actions;

const bookReducer = bookSlice.reducer;

export default bookReducer;