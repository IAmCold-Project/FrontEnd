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
import { useCallback } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_600SemiBold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <LinearGradient colors={["#4F4F4F", "#181818"]} style={styles.appContainer}>
      <View style={styles.mainBackgroundContainer}>
        <Text style={styles.title}>I am Cold.</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.text}>Welcome</Text>
        </View>
        <View style={styles.emailContainer}>
          <TextInput
            placeholderTextColor={"white"}
            cursorColor={"gray"}
            spellCheck={false}
            style={styles.miniText}
            maxLength={30}
            keyboardType="email-address"
            placeholder={"Type here your email to proceed"}
            contextMenuHidden={true}
            blurOnSubmit={true}
            clearTextOnFocus={true}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  loginContainer: {
    flex: 1,

    flexDirection: "column",
    paddingTop: 40,
    alignItems: "center",
  },
  info: {
    flex: 1,
  },
  emailContainer: {
    flex: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingVertical: 13,
    paddingHorizontal: 25,
    backgroundColor: "#1D1D1D",
    borderRadius: 30,
    minWidth: 330,
  },
  appContainer: {
    flex: 1,
    flexDirection: "column",
  },
  mainBackgroundContainer: {
    flex: 4,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 4,
    backgroundColor: "#121212",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Inter_900Black",
    color: "white",
    fontSize: 40,
  },
  text: {
    fontFamily: "Inter_600SemiBold",
    color: "white",
    fontSize: 20,
  },
  miniText: {
    fontFamily: "Inter_400Regular",
    placeholderTextColor: "#ffffff",
    color: "#ffffff",
    opacity: 0.5,
    fontSize: 16,
    alignSelf: "stretch",
  },
});
