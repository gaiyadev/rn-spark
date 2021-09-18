import React from "react";
import { Platform, Keyboard, KeyboardAvoidingView } from "react-native";

const KeyboardVoiding = (props) => {
  return (
    <KeyboardAvoidingView
      onPress={Keyboard.dismiss}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {...props.children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardVoiding;
