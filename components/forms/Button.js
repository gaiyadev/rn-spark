import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { COLORS } from "../../constants/colors";

const Btn = (props) => {
  const {
    title,
    titleStyle,
    containerStyle,
    buttonStyle,
    onPress,
    color,
    style,
  } = props;

  return (
    <Button
      containerStyle={containerStyle}
      {...props}
      title={title}
      onPress={onPress}
      color={color}
      style={{ ...styles.btn, ...style }}
      buttonStyle={buttonStyle}
      titleStyle={{ color: titleStyle }}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    color: COLORS.blue,
  },
});
export default Btn;
