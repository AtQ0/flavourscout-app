import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from "./src/navigation/Navigator";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding immediately
SplashScreen.preventAutoHideAsync();

export default function App() {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    slate: require("./assets/fonts/SlateMedium.ttf"),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        // Hide the splash screen once the fonts are loaded
        await SplashScreen.hideAsync();
      }
    }

    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Keep the splash screen visible while fonts are loading
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
