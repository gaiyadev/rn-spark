import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ICONS } from "../../constants/icons";

const HeaderLogo = () => {
  return (
    <View style={styles.titleContainer}>
      <Image
        style={styles.img}
        source={require("../../assets/images/worlwide.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
    justifyContent: "center",
  },
  img: {
    width: 35,
    height: 35,
  },
});
export default HeaderLogo;
