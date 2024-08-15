import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native';
import PropTypes from 'prop-types'; // Import PropTypes

export default function Header({ navigation }) {

    function onPressOfTitle() {
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Pressable
                    onPress={onPressOfTitle}
                    style={styles.titleWrapper}>
                    <Text style={styles.title}>FlavourScout</Text>
                </Pressable>
            </View>
            <View style={styles.searchIconContainer}>
                <Pressable>
                    <Image
                        source={{ uri: 'https://example.com/search-icon.png' }} // Provide a valid source for the image
                        style={styles.searchIcon} // Add style if needed
                    />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

// Define prop types for the component
Header.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired, // Ensure navigate is a function and required
    }).isRequired, // Ensure navigation prop is an object and required
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF69B4', // Light blue
        height: 100,
        width: '100%',
    },
    titleContainer: {
        width: 150,
    },
    titleWrapper: {
        backgroundColor: '#FFFF00', // Yellow
        height: '100%',
        justifyContent: 'center',
    },
    title: {
        backgroundColor: '#ffffff', // White
        fontSize: 20, // No need for 'px', React Native handles font sizes as numbers
        fontWeight: 'bold',
        paddingHorizontal: 10, // Add some padding around the text if needed
        paddingVertical: 5,
    },
});
