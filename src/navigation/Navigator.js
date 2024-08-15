import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
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
                            headerTitleAlign: 'left', // Align title to the left
                            headerStyle: {
                                backgroundColor: '#FF6347', // Header background color
                            },
                            headerTitleStyle: {
                                fontSize: 20, // Set the font size here
                                fontWeight: 'bold', // Optionally set font weight
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
    },
});
