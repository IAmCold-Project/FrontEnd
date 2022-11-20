import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import * as React from "react";
import LoginPage from "./src/component/login/login";
import Dage from "./src/component/login/sex";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_600SemiBold,
    Inter_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.appMain}>
      <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  appMain: {
    flex: 1,
  },
});
