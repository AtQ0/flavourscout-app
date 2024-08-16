import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import SearchBtn from '../components/SearchBtn/SearchBtn';

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <View style={styles.wrapper}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="FlavourScout"
                        component={HomeScreen}
                        options={{
                            headerTitle: () => (
                                <Text style={styles.customTitle}>
                                    FlavourScout
                                </Text>
                            ),
                            headerTitleAlign: 'left', // Align title to the left
                            headerStyle: {
                                backgroundColor: '#408558', // Header background color
                                shadowColor: 'transparent', // Remove shadow on iOS
                                elevation: 0, // Remove shadow on Android
                                borderBottomWidth: 0, // Remove bottom border if any
                            },
                            headerRight: () => (
                                <View style={styles.searchIconContainer}>
                                    <SearchBtn />
                                </View>
                            ),
                        }}
                    />
                    <Stack.Screen
                        name="RecipeDetail"
                        component={RecipeDetailScreen}
                        options={{
                            headerBackTitleVisible: false, // Hide previous screen's title
                            headerTintColor: '#000000', // Change back arrow color
                            headerStyle: {
                                shadowColor: 'transparent', // Remove shadow on iOS
                                elevation: 0, // Remove shadow on Android
                                borderBottomWidth: 0, // Remove bottom border if any
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Optional: add a background color
        width: '100%',
    },
    searchIconContainer: {
        marginRight: 10,
        marginBottom: 3,
    },
    customTitle: {
        fontSize: 25, // Set the font size here
        fontWeight: 'bold', // Optionally set font weight
        marginLeft: 4, // Add margin left to the title
        color: '#000000', // Optionally change the color of the title
    },
});
