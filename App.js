import { StyleSheet, View } from 'react-native';
import Navigator from "./src/navigation/Navigator";
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    slate: require("./assets/fonts/SlateMedium.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
});
