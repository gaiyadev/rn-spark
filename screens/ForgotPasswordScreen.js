import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../components/forms/Button";
import Inputs from "../components/forms/Input";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import HeaderLogo from "../components/forms/HeaderLogo";
import BackArrowButton from "../components/UI/BackArrowButton";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <KeyboardAvoidingView
      onPress={Keyboard.dismiss}
      keyboardVerticalOffset={100}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.container}>
          <BackArrowButton onPress={() => navigation.goBack()} />

          <HeaderLogo />

          {/* <View style={styles.forgotTextContainer}>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                paddingHorizontal: 12,
                paddingVertical: 7,
                fontSize: 14,
              }}
            >
              Enter your registered email address below to recieve instruction
            </Text>
          </View> */}

          <View style={styles.inputContainer}>
            <Inputs
              value={email}
              autoFocus={true}
              onChangeText={(text) => setEmail(text)}
              textContentType="emailAddress"
              placeholder="Email"
              label="envelope"
              keyboardType="email-address"
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
              title="Reset Password"
              onPress={() => {}}
              color={COLORS.black}
            />
          </View>
          <View style={styles.or}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.orText}>Login</Text>
            </TouchableWithoutFeedback>
          </View>

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
  forgotTextContainer: {
    padding: 13,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    ...FONTS.tiny,
    color: COLORS.blue,
  },
  account: {
    ...FONTS.tiny,
    color: COLORS.gray,
    paddingVertical: 12,
  },
  or: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 42,
  },
  orText: {
    color: COLORS.blue,
    fontSize: 14,
    padding: 9,
    ...FONTS.tiny,
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

export default ForgotPasswordScreen;
