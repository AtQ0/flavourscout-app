import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>FlavourScout</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ADD8E6', //Orange
        height: 100,
        width: '100%',
    },
    wrapper: {
        backgroundColor: '#FFFF00', //Yellow
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '100px',
    },

    title: {
        backgroundColor: '#ffffff', //white
        width: 'fit-content',
        fontSize: '20px',
        fontWeight: 'bold',

    },
});
