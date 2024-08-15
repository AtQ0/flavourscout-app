import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { generateRecipe } from '../utilities/recipes/recipeUtils';

export default function RecipeDetailScreen({ route, navigation }) {
    const { recipeID } = route.params;
    const [recipe, setRecipe] = useState(null); // Initialize with null to handle loading state

    useEffect(() => {
        generateRecipe(recipeID, (fetchedRecipe) => {
            setRecipe(fetchedRecipe);
            navigation.setOptions({ title: fetchedRecipe.strMeal }); // Set the header title to recipe name
        });
    }, [recipeID, navigation]);

    return (
        <View>
            {recipe ? (
                <>
                    <Text>{recipe.strMeal}</Text>
                    <Text>Recipe ID: {recipeID}</Text>
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
}

// Proptype validation
RecipeDetailScreen.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            recipeID: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    navigation: PropTypes.object.isRequired,
};
