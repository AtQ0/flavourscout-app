import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { generateRecipesByAWord } from '../utilities/recipes/recipeUtils';

//Delete later (only for lab2)
import { Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
//////////

export default function SearchScreen() {

    //Delete later only for lab2
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    ///////////

    const route = useRoute();
    const { searchTerm } = route.params || {}; // Default to empty if not found

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            generateRecipesByAWord(searchTerm, setRecipes);
        }
    }, [searchTerm]);

    return (
        <ScrollView style={styles.container}>
            {searchTerm ? (
                <View style={styles.searchResultsContainer}>
                    <Text style={styles.searchResultsTitle}>Results for {searchTerm}</Text>
                    <View>
                        {recipes.length > 0 ? (
                            recipes.map((recipe, index) => (
                                <Text key={index}>{recipe.strMeal}</Text>
                            ))
                        ) : (
                            <Text>No recipes found.</Text>
                        )}
                    </View>
                </View>
            ) : (
                <View>
                    <View style={styles.popularRecipesContainer}>
                        <Text style={styles.popularRecipesTitle}>Popular recipes</Text>
                        <ScrollView horizontal>
                            <Pressable
                                onPress={() => { alert('Ett') }}
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? '#f55' : '#faa' },
                                    styles.pressableRecipe,
                                ]}
                            >
                                <Text>Ett</Text>
                                {/*Delete below later only for lab2*/}
                                <Text>{windowHeight}</Text>
                                <Text>{windowWidth}</Text>
                                <LinearGradient
                                    // Background Linear Gradient
                                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                                    style={styles.background}
                                />
                                {/*Delete above later only for lab2*/}
                            </Pressable>
                            <Pressable
                                onPress={() => { alert('Två') }}
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? '#5f5' : '#afa' },
                                    styles.pressableRecipe,
                                ]}
                            >
                                <Text>Två</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => { alert('Tre') }}
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? '#55f' : '#aaf' },
                                    styles.pressableRecipe,
                                ]}
                            >
                                <Text>Tre</Text>
                            </Pressable>
                        </ScrollView>
                    </View>

                    <View style={styles.recipesForYouContainer}>
                        <Text style={styles.recipesForYouTitle}>Recipes for you</Text>
                        <ScrollView horizontal>
                            <Pressable
                                onPress={() => { alert('Ett') }}
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? '#f55' : '#faa' },
                                    styles.pressableRecipe,
                                ]}
                            >
                                <Text>Ett</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => { alert('Två') }}
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? '#5f5' : '#afa' },
                                    styles.pressableRecipe,
                                ]}
                            >
                                <Text>Två</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => { alert('Tre') }}
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? '#55f' : '#aaf' },
                                    styles.pressableRecipe,
                                ]}
                            >
                                <Text>Tre</Text>
                            </Pressable>
                        </ScrollView>
                    </View>

                    <View style={styles.recipesOtherContainer}>
                        <Text style={styles.recipesOtherTitle}>Other recipes</Text>
                        <ScrollView horizontal>
                            <Pressable
                                onPress={() => { alert('Ett') }}
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? '#f55' : '#faa' },
                                    styles.pressableRecipe,
                                ]}
                            >
                                <Text>Ett</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => { alert('Två') }}
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? '#5f5' : '#afa' },
                                    styles.pressableRecipe,
                                ]}
                            >
                                <Text>Två</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => { alert('Tre') }}
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? '#55f' : '#aaf' },
                                    styles.pressableRecipe,
                                ]}
                            >
                                <Text>Tre</Text>
                            </Pressable>
                        </ScrollView>
                    </View>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAE5C7', // Beige
        paddingTop: 40,
    },
    pressableRecipe: {
        height: 300,
        width: 300,
    },
    popularRecipesContainer: {
        marginBottom: 50,
    },
    recipesForYouContainer: {
        marginBottom: 50,
    },
    recipesOtherContainer: {
        marginBottom: 100,
    },
    popularRecipesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    recipesForYouTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    recipesOtherTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    searchResultsContainer: {
        padding: 20,
    },
    searchResultsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
});
