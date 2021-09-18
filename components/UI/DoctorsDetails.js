import React from "react";
import { View, Text } from "react-native";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";

const DoctorsDetails = (props) => {
  const { label, number } = props;
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto-Black",
          fontSize: 20,
          lineHeight: 36,
        }}
      >
        {number}
      </Text>
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.gray,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default DoctorsDetails;
