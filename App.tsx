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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import * as React from "react";
import LoginPage from "./src/component/login/login";

const Stack = createNativeStackNavigator();
function Home() {
  return (
    <View>
      <Text>sex</Text>
    </View>
  );
}
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Main" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appMain: {
    flex: 1,
  },
});
