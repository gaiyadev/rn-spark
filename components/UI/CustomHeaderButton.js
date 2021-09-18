import React from "react";
import { Platform } from "react-native";

import Colors from "../../themes/colors";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
// import Icon from "react-native-vector-icons/Ionicons";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      color={Platform.OS === "android" ? "#fff" : Colors.primaryColor}
      IconComponent={Ionicons}
      iconSize={23}
    />
  );
};

export default CustomHeaderButton;
