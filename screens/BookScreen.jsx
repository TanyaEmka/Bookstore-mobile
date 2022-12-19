import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { resetBook, setBook, setAuthor, setPublisher, setStatus, resetBookProps } from '../store/bookSlice';
import { axiosInstance } from '../api';

export default function BookScreen({ route }) {
    const { id } = route.params;
    const dispatch = useDispatch();
    const book = useSelector((store) => store.bookR.book);
    const author = useSelector((store) => store.bookR.author);
    const publisher = useSelector((store) => store.bookR.publisher);
    const status = useSelector((store) => store.bookR.status);
    useEffect(() => {
        async function getOneBook() {
            await axiosInstance.get(`/books/${id}`).then((response) => dispatch(setBook(response?.data)));
            await axiosInstance.get(`/authors/${book.author_id}`).then((response) => dispatch(setAuthor(response?.data)));
            await axiosInstance.get(`/publishers/${book.publisher_id}`).then((response) => dispatch(setPublisher(response?.data)));
            await axiosInstance.get(`/statuses/${book.status_id}`).then((response) => dispatch(setStatus(response?.data)));
        }
        getOneBook();
        return () => {
            dispatch(resetBook());
            dispatch(resetBook());
        };
    }, [dispatch]);
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{book.title}, {book.age_limit}+</Text>
            <Text style={styles.text}>Цена: {book.price} р.</Text>
            <Text style={styles.text}>Автор: {author.name}</Text>
            <Text style={styles.text}>Издательство: {publisher.name}, {book.publish_year}</Text>
            <Text style={styles.text}>Статус: {status.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            width: 320,
            backgroundColor: '#663399',
            borderRadius: 12,
            padding: 24,
            gap: 12,
            margin: 8,
         },
    text: { color: '#f0f0f0', fontSize: 16 },
});