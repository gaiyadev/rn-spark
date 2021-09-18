import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../components/forms/Button";
import Inputs from "../components/forms/Input";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import SocialLinks from "../components/forms/SocialLinks";
import HeaderLogo from "../components/forms/HeaderLogo";
import * as Animatable from "react-native-animatable";
import BackArrowButton from "../components/UI/BackArrowButton";

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Submitting data
  const onSubmitHandler = () => {
    const user = { email, password };
    console.log(user);
    navigation.navigate("Otp");
  };

  return (
    <KeyboardAvoidingView
      onPress={Keyboard.dismiss}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      // keyboardVerticalOffset={100}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        <View style={styles.container}>
          <BackArrowButton onPress={() => navigation.goBack()} />

          <HeaderLogo />

          <View style={styles.inputContainer}>
            <Inputs
              value={email}
              onChangeText={(text) => setEmail(text)}
              textContentType="emailAddress"
              placeholder="Email"
              label="envelope"
              keyboardType="email-address"
              returnKeyLabel="next"
            />
            <Inputs
              onChangeText={(text) => setPassword(text)}
              textContentType="password"
              placeholder="Password"
              returnKeyLabel="done"
              label="lock"
              value={password}
              secureTextEntry={!showPassword}
              rightIcon={
                <Icon
                  name={showPassword ? "eye" : "eye-slash"}
                  size={24}
                  color={COLORS.blue}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
            <View style={styles.forgotPasswordContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("ForgotPassword");
                }}
              >
                <Text style={styles.forgotPassword}>ForgotPassword?</Text>
              </TouchableWithoutFeedback>
            </View>

            <Button
              titleStyle={COLORS.white}
              buttonStyle={{
                backgroundColor: COLORS.blue,
                padding: 12,
                borderRadius: 13,
                width: 300,
              }}
              containerStyle={{ alignItems: "center" }}
              title="Login"
              onPress={onSubmitHandler}
              color={COLORS.black}
              style={styles.btn}
            />
          </View>
          <View style={styles.or}>
            <Animatable.Text
              animation="slideInDown"
              iterationCount={5}
              direction="alternate"
            >
              Login with
            </Animatable.Text>
          </View>
          {/* SOCIAL LOGIN */}
          <SocialLinks />

          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.account}>
              Don't have an account? &nbsp;
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("Signup");
                }}
              >
                <Text style={styles.signup}>Sign Up</Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  signup: {
    ...FONTS.tiny,
    color: COLORS.blue,
  },
  account: {
    ...FONTS.tiny,
    color: COLORS.gray,
  },
  or: {
    flex: 1,
    alignItems: "center",
    ...FONTS.tiny,
  },
  orText: {
    color: COLORS.gray,
  },

  forgotPassword: {
    paddingBottom: 6,
    paddingTop: 1,
    color: COLORS.blue,
    ...FONTS.tiny,
  },
  forgotPasswordContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  inputContainer: {
    padding: 12,
  },
  btn: {
    borderRadius: 50,
    padding: 12,
  },
  container: {
    flex: 1,
    marginTop: 30,
    alignContent: "center",
    backgroundColor: COLORS.white,
  },
});

export default LoginScreen;
