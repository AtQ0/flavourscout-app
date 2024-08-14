import { StyleSheet, View } from 'react-native';
import Navigator from "./src/navigation/Navigator";
import Header from './src/components/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
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
