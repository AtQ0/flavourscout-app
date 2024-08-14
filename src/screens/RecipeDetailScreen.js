import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import PropTypes from 'prop-types';
export default function RecipeDetailScreen({ route }) {

    const { recipeID } = route.params; // Example usage of route.params
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        generateSingleRecipeById(recipeID);
    }, []);

    function generateSingleRecipeById(incomingID) {
        console.log(incomingID)
        const fetchAddress = `www.themealdb.com/api/json/v1/1/lookup.php?i=${incomingID}`;
        console.log(fetchAddress)

        fetch(fetchAddress)
            .then(response => response.json())
            .then(result => setRecipe(result))
            .catch(error => console.error('Error fetching recipes:', error));
    }

    useEffect(() => {
        console.log("hell", recipe)
    }, [recipe])

    RecipeDetailScreen.propTypes = {
        route: PropTypes.shape({
            params: PropTypes.shape({
                recipeID: PropTypes.string.isRequired, // Adjust the type according to your actual data
            }).isRequired,
        }).isRequired,
    };

    return (
        <View>
            <Text>WHAAAAT</Text>
            <Text>Recipe ID: {recipeID}</Text>

        </View>
    );


}
