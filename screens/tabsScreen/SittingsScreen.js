import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
const SittingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>chat</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
export default SittingsScreen;
