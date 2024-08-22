import { StyleSheet, Pressable, ScrollView, Text, View } from "react-native";


export default function SearchScreen() {

    return (


        <ScrollView style={styles.container}>

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
                <Text style={styles.recipesOtherTitle}>Vegan recipes</Text>
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

        </ScrollView>


    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF69B4',
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

})
