import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardScreen from "../screens/onBoard/OnboardingScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import { FONTS } from "../constants/fonts";
import { COLORS } from "../constants/colors";
import Icon from "react-native-vector-icons/Ionicons";
import AccountScreen from "../screens/user/AccountScreen";
import ChangePassswordScreen from "../screens/user/ChangePassswordScreen";
const OnboardStack = createNativeStackNavigator();

const Onboard = () => {
  return (
    <NavigationContainer>
      <OnboardStack.Navigator>
        <OnboardStack.Screen
          name="OnboardScreen"
          component={OnboardScreen}
          options={{ headerShown: false }}
        />
        <OnboardStack.Screen
          name="Login"
          component={LoginScreen}
          options={({ route, navigation }) => ({
            title: "iTrans",
            headerStyle: {
              backgroundColor: "#0682FE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerShown: false,
          })}
        />
        <OnboardStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={({ route, navigation }) => ({
            title: "iTrans",
            headerStyle: {
              backgroundColor: "#0682FE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerShown: false,
          })}
        />
        <OnboardStack.Screen
          name="Signup"
          component={SignupScreen}
          options={({ route, navigation }) => ({
            title: "iTrans",
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerShown: false,
          })}
        />

        <OnboardStack.Screen
          name="Account"
          component={AccountScreen}
          options={({ route, navigation }) => ({
            title: "Account Settings",
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: COLORS.blue,
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerShown: true,
          })}
        />
        <OnboardStack.Screen
          name="ChangePassword"
          component={ChangePassswordScreen}
          options={({ route, navigation }) => ({
            title: "Change Password",
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: COLORS.blue,
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerShown: true,
          })}
        />
      </OnboardStack.Navigator>
    </NavigationContainer>
  );
};

export default Onboard;
