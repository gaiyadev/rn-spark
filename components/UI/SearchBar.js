import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

const SearchBarComp = () => {
  const [search, setSearch] = useState("");

  // SUbmitting
  const onSubmitHandler = () => {
    console.log(search);
  };

  return (
    <KeyboardAvoidingView
      onPress={Keyboard.dismiss}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <View
          style={{
            marginVertical: 10,
            padding: 7,
          }}
        >
          <SearchBar
            onEndEditing={onSubmitHandler}
            onChangeText={onSubmitHandler}
            searchIcon={{
              color: COLORS.blue,
            }}
            clearIcon={{
              color: "red",
            }}
            inputContainerStyle={{
              backgroundColor: COLORS.white,
              borderRadius: 5,
            }}
            leftIconContainerStyle={{
              backgroundColor: "white",
              borderRadius: 5,
            }}
            containerStyle={{
              elevation: 5,
              borderRadius: 15,
              height: 47,
              backgroundColor: COLORS.why,
              justifyContent: "space-around",
            }}
            style={styles.search}
            onChangeText={(text) => setSearch(text)}
            placeholder="Search doctor..."
            value={search}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  search: {
    flex: 1,
    paddingVertical: 10,

    backgroundColor: COLORS.white,
  },
  findADoctor: {
    ...FONTS.h2,
    paddingTop: 5,
  },
  welcome: {
    flex: 1,
    marginTop: 5,
    ...FONTS.tiny,
    marginLeft: 12,
    color: COLORS.gray,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
export default SearchBarComp;
