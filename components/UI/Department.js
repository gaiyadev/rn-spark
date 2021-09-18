import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/colors";

const DepartmentList = (props) => {
  const { title, icon, id } = props;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("ID", id);
        }}
      >
        <Card
          containerStyle={{
            elevation: 5,
            borderRadius: 12,
            backgroundColor: COLORS.card,
          }}
        >
          <Icon color={COLORS.blue} name={icon} size={40} />
        </Card>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("ID", id);
        }}
      >
        <Text
          style={{
            paddingVertical: 7,
            paddingHorizontal: 10,
          }}
        >
          {title}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default DepartmentList;
