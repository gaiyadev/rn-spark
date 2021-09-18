import React from "react";
import { View, StyleSheet } from "react-native";
import { SocialIcon } from "react-native-elements";

const SocialLinks = () => {
  return (
    <View style={styles.social}>
      <SocialIcon
        onPress={() => {
          console.log("signing with fb");
        }}
        raised={false}
        type="facebook"
      />
      <SocialIcon
        raised={false}
        onPress={() => {
          console.log("signing with google");
        }}
        type="google"
      />
      <SocialIcon
        raised={false}
        onPress={() => {
          console.log("signing with twitter");
        }}
        type="twitter"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
  },
});

export default SocialLinks;
