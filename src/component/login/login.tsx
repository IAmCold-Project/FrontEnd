import { StatusBar } from "expo-status-bar";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SvgUri, { Path } from "react-native-svg";

import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

const { width, height } = Dimensions.get("window");

import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

function Upper() {
  const stylesUpper = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      color: "#121212",
      margin: 50,
    },
    title: {
      fontFamily: "Inter_900Black",
      color: "white",
      fontSize: 40,
    },
    logo: {
      position: "absolute",

      width: 300,
      height: 300,
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
    button: {
      position: "absolute",
      fontFamily: "Inter_400Regular",
      bottom: "30%",
      alignItems: "center",
      backgroundColor: "#1d1d1d",
      paddingVertical: 10,
      paddingHorizontal: 20,
      minWidth: 100,
      borderRadius: 20,
    },
    buttonText: {
      fontSize: 16,
      color: "#dddddd",
    },
  });
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let waterlooRegex = new RegExp("[a-z0-9]+@uwaterloo.ca");
  const [sliderState, setSliderState] = useState(0);

  const TypedHandler = (email: string) => {
    if (email) {
      if (!regex.test(email)) {
        setSliderState(3);
      } else if (!waterlooRegex.test(email)) {
        setSliderState(4);
      } else {
        axios
          .post("http://35.182.206.211:8000/api/accounts/test/", {
            email: email,
          })
          .then((data: AxiosResponse<boolean>) => {
            if (data.data) {
              setSliderState(1);
            } else {
              setSliderState(2);
            }
          });

        {
        }
      }
    }
  };
  const [emailInput, setEmailInput] = useState("");
  let stateTextButton = [
    "",
    <TouchableOpacity
      style={stylesLoginInput.button}
      onPress={(e) => {
        setInputState(1);
        setSliderState(5);
      }}
    >
      <Text style={stylesLoginInput.buttonText}>Proceed</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      style={stylesLoginInput.button}
      onPress={(e) => {
        setInputState(2);
        setSliderState(6);
      }}
    >
      <Text style={stylesLoginInput.buttonText}>Register</Text>
    </TouchableOpacity>,
    "",
    "",
    <TouchableOpacity
      style={stylesLoginInput.button}
      onPress={(e) => {
        axios
          .post("http://35.182.206.211:8000/api/accounts/login/", {
            email: emailInput,
            password: password,
          })
          .then((data: AxiosResponse<boolean>) => {
            if (data.data) {
              setSliderState(1);
            } else {
              setSliderState(2);
            }
          });
      }}
    >
      <Text style={stylesLoginInput.buttonText}>Log In</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      style={stylesLoginInput.button}
      onPress={(e) => {
        axios
          .post("http://35.182.206.211:8000/api/accounts/registration/", {
            email: emailInput,
            password1: password,
            password2: password1,
          })
          .then((data) => {
            if (data.data["access_token"]) {
              setSliderState(1);
            } else {
              setSliderState(2);
            }
          });
      }}
    >
      <Text style={stylesLoginInput.buttonText}>Create Account</Text>
    </TouchableOpacity>,
  ];
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [inputState, setInputState] = useState(0);
  let stateInput = [
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
      onChangeText={setEmailInput}
      onEndEditing={(e) => TypedHandler(e.nativeEvent.text)}
    />,
    <TextInput
      placeholderTextColor={"white"}
      cursorColor={"gray"}
      spellCheck={false}
      style={stylesLoginInput.miniText}
      maxLength={30}
      keyboardType="visible-password"
      placeholder={"Type here your password"}
      contextMenuHidden={true}
      blurOnSubmit={true}
      clearTextOnFocus={true}
      onChangeText={setPassword}
    />,
    <View>
      <TextInput
        placeholderTextColor={"white"}
        cursorColor={"gray"}
        spellCheck={false}
        style={stylesLoginInput.miniText}
        maxLength={30}
        keyboardType="visible-password"
        placeholder={"Set password here"}
        contextMenuHidden={true}
        blurOnSubmit={true}
        clearTextOnFocus={true}
        onChangeText={setPassword}
      />
      <TextInput
        placeholderTextColor={"white"}
        cursorColor={"gray"}
        spellCheck={false}
        style={stylesLoginInput.miniText}
        maxLength={30}
        keyboardType="visible-password"
        placeholder={"Confirm password"}
        contextMenuHidden={true}
        blurOnSubmit={true}
        clearTextOnFocus={true}
        onChangeText={setPassword1}
      />
    </View>,
  ];

  return (
    <View style={stylesLoginInput.inputContainer}>
      <View style={stylesLoginInput.welcomeContainer}>
        <Text style={stylesLoginInput.text}>Welcome</Text>
      </View>
      <View style={stylesLoginInput.emailContainer}>
        {stateInput[inputState]}
      </View>
      {stateTextButton[sliderState]}
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
