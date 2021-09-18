import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { COLORS, FONTS } from "../../constants/onboard";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { Appointment } from "../../data/appointments";
const AppointmentScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
      }}
    >
      <View
        style={{
          padding: 10,
        }}
      >
        {Appointment.map((item, i) => (
          <ListItem
            key={i}
            bottomDivider
            style={{
              padding: 3,
            }}
          >
            <ListItem.Content
              style={{
                padding: 4,
              }}
            >
              <ListItem.Title
                style={{
                  paddingVertical: 4,
                  ...FONTS.h4,
                  color: COLORS.blue,
                }}
              >
                {item.title}
              </ListItem.Title>
              <ListItem.Subtitle
                style={{
                  paddingVertical: 4,
                  ...FONTS.tiny,
                }}
              >
                {item.doctor}
              </ListItem.Subtitle>
              <ListItem.Subtitle
                style={{
                  paddingVertical: 4,
                  ...FONTS.tiny,
                }}
              >
                {item.subtitle}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron
              onPress={() => {
                console.log("d");
              }}
              type="user-outline"
              size={34}
              iconStyle={{
                color: COLORS.blue,
              }}
            />
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default AppointmentScreen;
