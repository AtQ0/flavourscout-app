
import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle, Line } from 'react-native-svg';

export default function SearchHeader() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigation = useNavigation();

    // Function to handle changes in the text input
    const handleSearchChange = (text) => {
        setSearchTerm(text); // Update local state with the new search term is made
        navigation.navigate('SearchScreen', { searchTerm: text }); // Pass searchTerm as parameter
    };

    const clearSearch = () => {
        setSearchTerm('');
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
            {searchTerm ? (
                <Pressable style={styles.clearButton} onPress={clearSearch}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <Circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="2" />
                        <Line x1="15" y1="9" x2="9" y2="15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <Line x1="9" y1="9" x2="15" y2="15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Svg>
                </Pressable>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#FFFFFF',
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
    clearButton: {
        position: 'absolute',
        right: -5,
    },
});
