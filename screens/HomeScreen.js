import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/onboard";
import SearchBarComp from "../components/UI/SearchBar";
import { Departments } from "../data/department";
import { users } from "../data/doctor";

import DepartmentList from "../components/UI/Department";
import Doctors from "../components/UI/Doctors";

const HomeScreen = ({ navigation }) => {
  const renderItem = (itemData) => {
    return (
      <DepartmentList
        icon={itemData.item.icon}
        title={itemData.item.title}
        id={itemData.item.id}
      />
    );
  };

  const renderItemDoc = (itemData) => {
    return (
      <Doctors
        navigation={navigation}
        name={itemData.item.name}
        avatar={itemData.item.avatar}
        id={itemData.item.id}
        subtitle={itemData.item.subtitle}
      />
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        <View style={styles.welcome}>
          <Text
            style={{
              color: "#979BA5",
            }}
          >
            Hello, gaiyadev
          </Text>
          <Text style={styles.findADoctor}>Find your doctor</Text>
          {/*  */}
          <SearchBarComp />

          <View style={{ padding: 3, elevation: 5 }}>
            <Image
              style={{ width: "100%", height: 200, borderRadius: 15 }}
              source={require("../assets/images/doctor.jpg")}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: 16,
                lineHeight: 36,
                fontWeight: "100",
              }}
            >
              What do you need?
            </Text>
            <FlatList
              horizontal
              data={Departments}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 3,
              paddingTop: 10,
              paddingRight: 14,
            }}
          >
            <TouchableWithoutFeedback>
              <Text
                style={{
                  fontFamily: "Roboto-Bold",
                  fontSize: 16,
                }}
              >
                Top Doctors
              </Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("AllDoctor");
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto-Bold",
                  fontSize: 16,
                  color: COLORS.blue,
                }}
              >
                View all
              </Text>
            </TouchableWithoutFeedback>
          </View>
          {/* doc */}
          <View style={{ marginBottom: 15 }}>
            <FlatList
              horizontal={true}
              data={users}
              keyExtractor={(item) => item.id}
              renderItem={renderItemDoc}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default HomeScreen;
