import "react-native-gesture-handler";
import * as React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Navigator from "./navigation/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import { MenuProvider } from "react-native-popup-menu";

const theme = {
  Button: {
    raised: false,
  },

  Avatar: {
    rounded: false,
  },
};

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <MenuProvider>
          <Navigator />
        </MenuProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
