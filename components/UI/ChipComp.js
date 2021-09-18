import React from "react";
import { View } from "react-native";
import { Chip } from "react-native-elements";

const ChipComp = ({ title, type }) => {
  return (
    <View>
      <Chip title={title} type={type} />
    </View>
  );
};

export default ChipComp;
