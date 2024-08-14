import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen'; // Uncomment when available

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <View style={styles.wrapper}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                    <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
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
});
