import React from "react";
import { View, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/colors";

const AccountScreen = () => {
  const list = [
    {
      name: "Change Password",
      icon: "lock-closed-outline",
    },
    {
      name: "Notification",
      icon: "person-outline",
    },
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Icon name={l.icon} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Chevron
                i
                iconStyle={{
                  color: COLORS.blue,
                }}
              />
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
