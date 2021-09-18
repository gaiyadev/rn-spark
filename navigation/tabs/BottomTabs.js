import * as React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AppointmentScreen from "../../screens/tabsScreen/AppointmentScreen";
import SittingsScreen from "../../screens/tabsScreen/SittingsScreen";
import ProfileScreen from "../../screens/tabsScreen/ProfileScreen";
import HomeScreen from "../../screens/HomeScreen";
import { COLORS } from "../../constants/colors";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: COLORS.blue,
        elevation: 0,
        paddingVertical: 4,
        paddingHorizontal: 9,
      }}
      tabBarOptions={{
        activeTintColor: COLORS.white,
        inactiveTintColor: COLORS.gray,

        style: {
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",

          tabBarIcon: ({ focused }) => (
            <Icon
              name={Platform.OS === "android" ? "home-outline" : "home-outline"}
              size={focused ? 26 : 25}
              color={Platform.OS === "android" ? COLORS.white : COLORS.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={SittingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={
                Platform.OS === "android"
                  ? "chatbubble-ellipses-outline"
                  : "chatbubble-ellipses-outline"
              }
              size={25}
              color={Platform.OS === "android" ? COLORS.white : COLORS.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={Platform.OS === "android" ? "apps-outline" : "apps-outline"}
              size={focused ? 26 : 25}
              color={Platform.OS === "android" ? COLORS.white : COLORS.white}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={
                Platform.OS === "android" ? "person-outline" : "person-outline"
              }
              size={focused ? 26 : 25}
              color={Platform.OS === "android" ? COLORS.white : COLORS.white}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.bgColor,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    shadowRadius: 3.25,
  },
});
