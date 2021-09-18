import React from "react";
import { View, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/colors";

const BackArrowButton = (props) => {
  const { onPress } = props;
  return (
    <View
      style={{
        paddingHorizontal: 9,
      }}
    >
      <Icon
        onPress={onPress}
        name={
          Platform.OS === "android"
            ? "arrow-back-outline"
            : "chevron-back-outline"
        }
        size={25}
        color={Platform.OS === "android" ? COLORS.blue : COLORS.white}
      />
    </View>
  );
};

export default BackArrowButton;
