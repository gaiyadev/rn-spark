import React from "react";
import { View, Text } from "react-native-animatable";
const TextComp = (props) => {
  const { title } = props;
  return (
    <View>
      <Text
        style={{
          paddingTop: 14,
          paddingLeft: 9,
          fontFamily: "Roboto-Regular",
          fontSize: 19,
          lineHeight: 36,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default TextComp;
