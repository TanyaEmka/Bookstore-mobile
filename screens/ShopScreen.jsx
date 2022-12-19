import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { axiosInstance } from '../api';
import { setBooks } from '../store/bookSlice';
import BookCard from '../components/BookCard';

export default function ShopScreen({ navigation }) {
    const dispatch = useDispatch();
    const books = useSelector((store) => store.bookR.books);

    useEffect(() => {
        console.log('update')
        async function getAllBooks() {
            await axiosInstance.get('/books/').then((response) => {dispatch(setBooks(response?.data))});
        }
        getAllBooks();
    }, [dispatch]);

    return (
        <ScrollView>
            <View style={styles.page}>
                {!!books && books.map((book) => <BookCard key={book.id} {...book} navigation={navigation} /> )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9370DB',
    },
});