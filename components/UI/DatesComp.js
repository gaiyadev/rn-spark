import React from "react";
import { View, Text } from "react-native";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";

const DateComp = (props) => {
  const { label, number } = props;
  return (
    <View
      style={{
        elevation: 1,
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginTop: 6,
        marginHorizontal: 4,
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto-Regular",
          fontSize: 20,
          lineHeight: 36,
          color: COLORS.gray,
        }}
      >
        {number}
      </Text>
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.black,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default DateComp;
