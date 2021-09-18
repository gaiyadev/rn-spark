import React from "react";
import { View, FlatList } from "react-native";
import { users } from "../../data/doctor";
import Doctors from "../../components/UI/Doctors";

const AllDoctorsScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        // numColumns={2}
        horizontal={false}
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <Doctors
              navigation={navigation}
              name={itemData.item.name}
              avatar={itemData.item.avatar}
              id={itemData.item.id}
              subtitle={itemData.item.subtitle}
              navigation={navigation}
            />
          );
        }}
      />
    </View>
  );
};

export default AllDoctorsScreen;
