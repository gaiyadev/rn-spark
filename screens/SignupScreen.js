import React, { useState } from "react";
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
import HeaderLogo from "../components/forms/HeaderLogo";
import BackArrowButton from "../components/UI/BackArrowButton";

const SignupScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setcomfirmPassword] = useState("");

  const [username, setUsername] = useState("");

  // Submitting data
  const onSubmitHandler = () => {
    const user = { email, password, username, comfirmPassword };
    console.log(user);
  };

  return (
    <KeyboardAvoidingView
      onPress={Keyboard.dismiss}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <View style={styles.container}>
          <BackArrowButton onPress={() => navigation.goBack()} />

          {/* logo */}
          <HeaderLogo />
          <View style={styles.inputContainer}>
            <Inputs
              placeholder="Username"
              value={useState}
              onChangeText={(text) => setUsername(text)}
              label="user"
            />

            <Inputs
              value={email}
              onChangeText={(text) => setEmail(text)}
              textContentType="emailAddress"
              placeholder="Email"
              label="envelope"
              keyboardType="email-address"
            />

            <Inputs
              onChangeText={(text) => setPassword(text)}
              textContentType="password"
              placeholder="Password"
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

            <Inputs
              onChangeText={(text) => setcomfirmPassword(text)}
              textContentType="password"
              placeholder="Comfirm Password"
              label="lock"
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

            <Button
              titleStyle={COLORS.white}
              buttonStyle={{
                backgroundColor: COLORS.blue,
                padding: 12,
                borderRadius: 13,
                width: 300,
              }}
              containerStyle={{ alignItems: "center" }}
              title="Sign Up"
              onPress={onSubmitHandler}
              color={COLORS.black}
            />
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.account}>
              Already have an account? &nbsp;
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={styles.signup}>Login</Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  socialLogo: {
    width: 25,
    height: 25,
  },
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
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 34,
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

  container: {
    flex: 1,
    marginTop: 30,
    alignContent: "center",
    backgroundColor: COLORS.bgColor,
  },
});

export default SignupScreen;
