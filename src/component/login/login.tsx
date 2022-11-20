import { StatusBar } from "expo-status-bar";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
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
import React from "react";

function Upper() {
  const stylesUpper = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontFamily: "Inter_900Black",
      color: "white",
      fontSize: 40,
    },
  });
  return (
    <View style={stylesUpper.container}>
      <Text style={stylesUpper.title}>IAmCold.</Text>
    </View>
  );
}

function LoginInput() {
  const stylesLoginInput = StyleSheet.create({
    inputContainer: {
      height: "40%",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      backgroundColor: "#121212",
      width: "100%",
      alignItems: "center",
      flexDirection: "column",
    },
    welcomeContainer: {
      paddingTop: 30,
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      paddingBottom: 20,
    },
    text: {
      fontFamily: "Inter_600SemiBold",
      color: "white",
      fontSize: 20,
    },
    emailContainer: {
      paddingTop: 13,
      paddingHorizontal: 25,
      backgroundColor: "#1D1D1D",
      borderRadius: 30,
      minWidth: 330,
      width: "70%",
    },
    miniText: {
      fontFamily: "Inter_400Regular",
      placeholderTextColor: "#ffffff",
      color: "#ffffff",
      opacity: 0.5,
      fontSize: 16,
      paddingBottom: 13,
      alignSelf: "stretch",
    },
  });

  return (
    <View style={stylesLoginInput.inputContainer}>
      <View style={stylesLoginInput.welcomeContainer}>
        <Text style={stylesLoginInput.text}>Welcome</Text>
      </View>
      <View style={stylesLoginInput.emailContainer}>
        <TextInput
          placeholderTextColor={"white"}
          cursorColor={"gray"}
          spellCheck={false}
          style={stylesLoginInput.miniText}
          maxLength={30}
          keyboardType="email-address"
          placeholder={"Type here your email to proceed"}
          contextMenuHidden={true}
          blurOnSubmit={true}
          clearTextOnFocus={true}
        />
      </View>
    </View>
  );
}

function LoginPage() {
  return (
    <LinearGradient
      colors={["#4F4F4F", "#181818"]}
      style={loginMain.appContainer}
    >
      <Upper />
      <LoginInput />
    </LinearGradient>
  );
}

const loginMain = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column",
  },
});
export default LoginPage;
