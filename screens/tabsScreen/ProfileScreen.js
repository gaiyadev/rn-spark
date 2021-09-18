import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { Card, ListItem, Avatar } from "react-native-elements";
import { FONTS } from "../../constants/onboard";
import DoctorsDetails from "../../components/UI/DoctorsDetails";
import TextComp from "../../components/UI/TextComp";

const UserProfileScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            margin: -11,
          }}
        >
          <Card
            containerStyle={{
              elevation: 3,
              borderRadius: 12,
              backgroundColor: COLORS.card,
              marginBottom: 4,
              padding: 1,
            }}
          >
            <ListItem
              containerStyle={{
                backgroundColor: COLORS.white,
              }}
            >
              <Avatar
                rounded
                avatarStyle={{
                  resizeMode: "cover",
                }}
                size="large"
                source={{
                  uri:
                    "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
                }}
                activeOpacity={1}
              />
              <ListItem.Content>
                <ListItem.Title style={{ paddingBottom: 4 }}>
                  <Text style={{ paddingBottom: 4, ...FONTS.h2 }}>
                    John Mark
                  </Text>
                </ListItem.Title>
                <ListItem.Subtitle style={{ paddingBottom: 4 }}>
                  <Text style={{ paddingBottom: 4, ...FONTS.tiny }}>Abuja</Text>
                </ListItem.Subtitle>
                <ListItem.Subtitle>
                  <Text>Nigeria</Text>
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </Card>
        </View>

        {/* ROUND */}

        <View style={styles.cards}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {/*  */}
            <DoctorsDetails label="Appointment" number={122} />
            <DoctorsDetails label="Medical Record" number={6} />
            <DoctorsDetails label="Diseases" number={8} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  cards: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 12,
    marginLeft: 4,
    marginTop: 17,
    paddingVertical: 24,
    paddingHorizontal: 6,
    marginRight: 13,
    marginLeft: 13,
    marginTop: 19,
  },
});

export default UserProfileScreen;
