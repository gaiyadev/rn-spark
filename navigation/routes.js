import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import OnboardScreen from "../screens/onBoard/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import OtpScreen from "../screens/OtpScreen";
import SignupScreen from "../screens/SignupScreen";
import { FONTS } from "../constants/fonts";
import BottomTabs from "../navigation/tabs/BottomTabs";
import { COLORS } from "../constants/colors";
import Icon from "react-native-vector-icons/Ionicons";
import AccountScreen from "../screens/user/AccountScreen";
import ChangePassswordScreen from "../screens/user/ChangePassswordScreen";
import HelpScreen from "../screens/HelpScreen";
import DoctorsDetailsScreen from "../screens/doctor/DoctorsDetailsScreen";
import AllDoctorsScreen from "../screens/doctor/AllDoctorsScreen";
const OnboardStack = createStackNavigator();

const Onboard = () => {
  return (
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
        name="Otp"
        component={OtpScreen}
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
        name="Home"
        component={BottomTabs}
        options={({ route, navigation }) => ({
          title: "iDoc",
          headerStyle: {
            elevation: 0,
            backgroundColor: COLORS.white,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            ...FONTS.h2,
          },
          headerLeft: () => (
            <Icon
              onPress={() => {
                console.log("draewr");
                navigation.toggleDrawer();
              }}
              color={COLORS.blue}
              style={{ paddingHorizontal: 10 }}
              size={30}
              name="menu-outline"
            />
          ),
          headerRight: () => (
            <View>
              <Menu>
                <MenuTrigger>
                  <Icon
                    style={{
                      paddingHorizontal: 10,
                    }}
                    name={
                      Platform.OS === "android"
                        ? "ellipsis-vertical-outline"
                        : "ellipsis-vertical-outline"
                    }
                    size={25}
                    color={
                      Platform.OS === "android" ? COLORS.blue : COLORS.blue
                    }
                  />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption
                    style={styles.container}
                    onSelect={() => navigation.navigate("Account")}
                  >
                    <Text style={styles.title}>
                      <Icon
                        size={14}
                        style={styles.icons}
                        name="person-outline"
                      />
                      &nbsp; Account
                    </Text>
                  </MenuOption>
                  <MenuOption
                    style={styles.container}
                    onSelect={() => {
                      console.log("d");
                      navigation.navigate("Help");
                    }}
                  >
                    <Text style={styles.title}>
                      <Icon
                        size={14}
                        style={styles.icons}
                        name="information-circle-outline"
                      />
                      &nbsp; Help
                    </Text>
                  </MenuOption>
                  <MenuOption
                    style={styles.container}
                    onSelect={() => {
                      Alert.alert(
                        "Account Deactivation",
                        "Are you sure you want to delete this account?",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel",
                          },
                          {
                            text: "OK",
                            onPress: () =>
                              Alert.alert(
                                "Deleted",
                                "Account Deleted sucessfully"
                              ),
                          },
                        ]
                      );
                    }}
                  >
                    <Text style={styles.title}>
                      <Icon size={14} color="red" name="trash-outline" />
                      &nbsp; Delete Account
                    </Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          ),
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
      <OnboardStack.Screen
        name="Help"
        component={HelpScreen}
        options={({ route, navigation }) => ({
          title: "Help",
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
        name="Doctor"
        component={DoctorsDetailsScreen}
        options={({ route, navigation }) => ({
          title: "Dr. Bryan",
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
        name="AllDoctor"
        component={AllDoctorsScreen}
        options={({ route, navigation }) => ({
          title: "Available Doctors",
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
  );
};

/**
 * ==================================================================
 *
 * DRAWER PART
 * ==============================================================
 */
// DRAWER

const Drawer = createDrawerNavigator();
const AppDrawer = () => {
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: COLORS.blue,
          itemStyle: { marginHorizontal: 20 },
        }}
        drawerStyle={{
          backgroundColor: COLORS.lightGray,
          width: 240,
        }}
        drawerType={dimensions.width >= 768 ? "permanent" : "front"}
        screenOptions={{
          drawerIcon: ({ focused }) => <Icon name="apps" />,
        }}
        initialRouteName="OnboardScreen"
      >
        <Drawer.Screen
          name="Dashboard"
          component={Onboard}
          options={{
            title: "Dashboard",
          }}
        />

        <Drawer.Screen
          name="Info"
          component={Onboard}
          options={{
            title: "Verson: 1.0",
            drawerIcon: ({ focused }) => <Icon name="git-network-outline" />,
          }}
        />
        <Drawer.Screen
          name="Dark"
          component={Onboard}
          options={{
            title: "Dark Mode",
            drawerIcon: ({ focused }) => <Icon name="sunny-outline" />,
          }}
        />
        <Drawer.Screen
          name="Github"
          component={Onboard}
          options={{
            title: "Github",
            drawerIcon: ({ focused }) => <Icon name="logo-github" />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 9,
    elevation: 10,
    backgroundColor: COLORS.white,
  },
  icons: {
    color: COLORS.blue,
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
  },
});
export default AppDrawer;
