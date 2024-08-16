import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { generateRecipe } from '../utilities/recipes/recipeUtils';

export default function RecipeDetailScreen({ route, navigation }) {
    const { recipeID } = route.params;
    const [recipe, setRecipe] = useState(null); // Initialize with null to handle loading state
    const [allRecipeKeys, setAllRecipeKeys] = useState(null);
    const [allIngredientKeysNotNull, setAllIngredientKeysNotNull] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [allMeasurementKeysNotNull, setAllMeasurementKeysNotNull] = useState(null);
    const [measurements, setMeasurements] = useState(null);

    // Change header name whenever recipeID is changed
    useEffect(() => {
        generateRecipe(recipeID, (fetchedRecipe) => {
            setRecipe(fetchedRecipe);
            navigation.setOptions({ title: fetchedRecipe.strMeal }); // Set the header title to recipe name
        });
    }, [recipeID, navigation]);

    // Identify all recipe keys
    useEffect(() => {
        if (recipe) {
            // Get all the keys from the selected recipe
            setAllRecipeKeys(Object.keys(recipe));
        }
    }, [recipe]);

    /*=========================*/
    /*==== GET INGREDIENTS ====*/
    /*=========================*/

    // Filter ingredients keys, not null, from all the recipe's keys
    useEffect(() => {
        if (allRecipeKeys) {
            setAllIngredientKeysNotNull(
                allRecipeKeys.filter(key => key.startsWith('strIngredient') && recipe[key])
            );
        }
    }, [allRecipeKeys]);

    //Get all values from recipe for relevant ingredient keys
    useEffect(() => {
        if (allIngredientKeysNotNull) {
            setIngredients(
                allIngredientKeysNotNull.map(key => ({
                    key,
                    value: recipe[key]
                }))
            );
        }
    }, [allIngredientKeysNotNull]);


    /*==============================================*/
    /*==== GET MEASUREMENTS FOR EACH INGREDIENT ====*/
    /*==============================================*/


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.singleRecipeWrapper}>
                {recipe ? (
                    <>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: recipe.strMealThumb }}
                                style={styles.recipeImage}
                            />
                        </View>
                        <View style={styles.detailsContainer}>
                            <View style={styles.ingredientsContainer}>
                                <Text style={styles.ingredientsTitle}>Ingredients:</Text>
                                {ingredients.length > 0 ? (
                                    ingredients.map((ingredient, index) => (
                                        <View key={index} style={styles.ingredientItem}>
                                            <Text style={styles.ingredientText}>{ingredient.value}</Text>
                                        </View>
                                    ))
                                ) : (
                                    <Text>No ingredients available.</Text>
                                )}
                            </View>
                            <View style={styles.instructionsContainer}>
                                {/* Add instructions or other details here */}
                            </View>
                        </View>
                    </>
                ) : (
                    <ActivityIndicator size="large" color="#0000ff" />
                )}
            </View>
        </ScrollView>
    );
}

// PropType validation
RecipeDetailScreen.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            recipeID: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FAE5C7', // beige
        justifyContent: 'center',
    },
    singleRecipeWrapper: {
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    imageContainer: {
        backgroundColor: '#ADD8E6',
        width: '100%',
        height: 350,
        marginBottom: 16,
    },
    recipeImage: {
        width: '100%',
        height: '100%',
    },
    detailsContainer: {
        flex: 1,
    },
    ingredientsContainer: {
        marginBottom: 16,
    },
    recipeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    recipeID: {
        fontSize: 16,
        marginBottom: 8,
    },
    ingredientsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    ingredientItem: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    ingredientText: {
        fontSize: 16,
    },
    instructionsContainer: {
        // Add styles for instructions container
    },
});
