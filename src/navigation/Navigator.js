import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import SearchBtn from '../components/SearchBtn/SearchBtn';
import SearchScreen from '../screens/SearchScreen';
import SearchHeader from '../components/SearchHeader/SearchHeader';


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
                                <Text style={styles.headerTitle}>
                                    <Text style={styles.flavour}>Flavour</Text>
                                    <Text style={styles.scout}>Scout</Text>
                                </Text>
                            ),
                            headerTitleAlign: 'left',
                            headerStyle: {
                                backgroundColor: '#408558',
                                shadowColor: 'transparent',
                                elevation: 0,
                                borderBottomWidth: 0,
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
                            headerBackTitleVisible: false,
                            headerTintColor: '#000000',
                            headerStyle: {
                                backgroundColor: '#408558',
                                shadowColor: 'transparent',
                                elevation: 0,
                                borderBottomWidth: 0,
                            },
                            headerTitleStyle: {
                                fontSize: 19,
                                fontWeight: 'bold',
                                color: '#000000',
                            },
                        }}
                    />
                    <Stack.Screen
                        name="SearchScreen"
                        component={SearchScreen}
                        options={{
                            headerTitle: () => <SearchHeader />, // Use custom header
                            headerTintColor: '#000000',
                            headerBackTitleVisible: false,
                            headerStyle: {
                                backgroundColor: '#408558',
                                shadowColor: 'transparent',
                                elevation: 0,
                                borderBottomWidth: 0,
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
        backgroundColor: '#FFFFFF',
        width: '100%',
    },
    searchIconContainer: {
        marginRight: 10,
        marginBottom: 3,
    },
    headerTitle: {
        fontFamily: 'slate',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 4,
        flexDirection: 'row', // Ensure text stays in one line
    },
    flavour: {
        color: '#000000',
    },
    scout: {
        color: '#FAE5C7', // Example color, adjust as needed
    },

});
