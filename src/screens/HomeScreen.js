import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { generateRecipes } from '../utilities/recipes/recipeUtils';

export default function HomeScreen({ navigation }) {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        generateRecipes("g", setRecipes);
    }, []);

    function onPressOfSingleRecipe(recipeID) {
        // Navigate to RecipeDetail screen and send it a param
        navigation.navigate('RecipeDetail', { recipeID });
    }

    // Render function with index parameter
    const renderRecipe = ({ item, index }) => (
        <View style={[styles.allRecipesWrapper, index === 0 && styles.firstRecipe]}>
            <Pressable
                onPress={() => onPressOfSingleRecipe(item.idMeal)}
                style={styles.eachRecipeWrapper}
            >
                <View style={styles.recipeImageWrapper}>
                    <Image
                        source={{ uri: item.strMealThumb }}
                        style={styles.recipeImage}
                    />
                </View>
                <View style={styles.recipeTitleWrapper}>
                    <Text style={styles.recipeTitle}>{item.strMeal}</Text>
                </View>
            </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                renderItem={renderRecipe}
                keyExtractor={item => item.idMeal}
            />
        </View>
    );
}

// Define prop types for the component
HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired, // Ensure navigation prop is an object and required
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAE5C7', // beige
    },
    allRecipesWrapper: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    firstRecipe: {
        marginTop: 20, // Add margin top for the first item
    },
    eachRecipeWrapper: {
        backgroundColor: '#008000', // Green
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recipeImageWrapper: {
        backgroundColor: '#FFA500', // Orange
        alignItems: 'center',
        height: 300,
        width: '100%',
        borderRadius: 8,
    },
    recipeImage: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    recipeTitleWrapper: {
        backgroundColor: '#408558',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    recipeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
