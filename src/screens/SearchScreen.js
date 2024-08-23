import React from 'react';
import { StyleSheet, Pressable, ScrollView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function SearchScreen() {
    // Get the searchTerm from route params
    const route = useRoute();
    const { searchTerm } = route.params || {}; // Default to empty if not found

    return (
        <ScrollView style={styles.container}>
            {searchTerm ? (
                <View style={styles.searchResultsContainer}>
                    <Text style={styles.searchResultsTitle}>Results for {searchTerm}</Text>
                    {/* Display search results based on searchTerm */}
                    <Text style={styles.searchResultsText}>Showing results for {searchTerm}. (Replace with actual search results)</Text>
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
    searchResultsText: {
        fontSize: 16,
    },
});
