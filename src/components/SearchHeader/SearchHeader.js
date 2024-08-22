
import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SearchHeader() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigation = useNavigation();

    // Function to handle changes in the text input
    const handleSearchChange = (text) => {
        setSearchTerm(text); // Update local state with the new search term
        // Navigate to SearchResultScreen with the search term as a parameter
        navigation.navigate('WHAAT', { searchTerm: text });
    };

    return (
        <View style={styles.headerContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search on FlavourScout"
                placeholderTextColor="#333333"
                returnKeyType="search"
                onChangeText={handleSearchChange} // Call handleSearchChange on text input change
                value={searchTerm}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    searchInput: {
        height: 35,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        width: 325,
        color: '#000',
    },
});
