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
    const [measurements, setMeasurements] = useState([]);

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
            setAllRecipeKeys(Object.keys(recipe));
        }
    }, [recipe]);

    /*==============================================*/
    /*==== GET INGREDIENTS AND MEASUREMENT KEYS ====*/
    /*==============================================*/

    useEffect(() => {
        if (allRecipeKeys) {
            setAllIngredientKeysNotNull(
                allRecipeKeys.filter(key => key.startsWith('strIngredient') && recipe[key])
            );

            setAllMeasurementKeysNotNull(
                allRecipeKeys.filter(key => key.startsWith('strMeasure') && recipe[key])
            );
        }
    }, [allRecipeKeys]);

    /*=========================*/
    /*==== GET INGREDIENTS ====*/
    /*=========================*/

    useEffect(() => {
        if (allIngredientKeysNotNull) {
            setIngredients(
                allIngredientKeysNotNull.map(key => recipe[key])
            );
        }
    }, [allIngredientKeysNotNull]);

    /*===========================*/
    /*==== GET MEASUREMENTS  ====*/
    /*===========================*/

    useEffect(() => {
        if (allMeasurementKeysNotNull) {
            setMeasurements(
                allMeasurementKeysNotNull.map(key => recipe[key])
            );
        }
    }, [allMeasurementKeysNotNull]);

    // Combine measurements and ingredients into pairs
    const combinedData = ingredients.map((ingredient, index) => ({
        ingredient,
        measurement: measurements[index] || '' // Handle case where measurements might not match ingredients
    }));

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
                                <Text style={styles.ingredientsTitle}>Measurements and Ingredients:</Text>
                                {combinedData.length > 0 ? (
                                    combinedData.map((item, index) => (
                                        <View key={index} style={styles.itemRow}>
                                            <Text style={styles.measurementText}>{item.measurement}</Text>
                                            <Text style={styles.ingredientText}>{item.ingredient}</Text>
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
    ingredientsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd', // Color of the bottom border
    },
    measurementText: {
        fontSize: 14,
        fontWeight: 'bold',
        flexShrink: 0, // Prevent text from shrinking
        marginRight: 4, // Add space between measurement and ingredient
    },
    ingredientText: {
        fontSize: 14,
        flexShrink: 0, // Prevent text from shrinking
    },
    instructionsContainer: {
        // Add styles for instructions container
    },
});
