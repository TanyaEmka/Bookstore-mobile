import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';

export default function BookCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Book', { id: props.id });
    };

    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.text}>{props.title}</Text>
                    <Text style={styles.text}>{props.price} р.</Text>
                </View>
            </View>
            <Button color='#9370DB' title='View details' onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: '#663399',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    brandTitle: { color: '#4287f5', fontSize: 16 },
    text: { color: '#f0f0f0', fontSize: 16 },
});