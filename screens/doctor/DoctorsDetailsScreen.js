import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { Card, ListItem, Rating, Avatar } from "react-native-elements";
import { FONTS } from "../../constants/onboard";
import { SocialIcon } from "react-native-elements";
import DoctorsDetails from "../../components/UI/DoctorsDetails";
import TextComp from "../../components/UI/TextComp";
import ChipComp from "../../components/UI/ChipComp";
import Button from "../../components/forms/Button";
import DatesComp from "../../components/UI/DatesComp";
import Icon from "react-native-vector-icons/Ionicons";

const DoctorsDetailsScreen = () => {
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
                    Dr. Bryan
                  </Text>
                </ListItem.Title>
                <ListItem.Subtitle style={{ paddingBottom: 4 }}>
                  <Text style={{ paddingBottom: 4, ...FONTS.tiny }}>
                    Dentist
                  </Text>
                </ListItem.Subtitle>
                <ListItem.Subtitle>
                  <Rating imageSize={18} />
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{ marginTop: 4 }}>
                  <SocialIcon
                    small
                    onPress={() => {
                      console.log("signing with fb");
                    }}
                    raised={false}
                    type="facebook"
                  />
                  &nbsp;
                  <SocialIcon
                    small
                    onPress={() => {
                      console.log("signing with ig");
                    }}
                    raised={false}
                    type="instagram"
                  />
                  &nbsp;
                  <SocialIcon
                    small
                    onPress={() => {
                      console.log("signing with fb");
                    }}
                    raised={false}
                    type="twitter"
                  />
                  &nbsp;
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
            <DoctorsDetails label="Patients" number={122} />
            <DoctorsDetails label="Experience" number={`6 years`} />
            <DoctorsDetails label="Certification" number={8} />
          </View>
        </View>
        {/* INFO */}

        <View>
          <TextComp title="Biolography" />
          {/* more */}
          <Text
            style={{
              ...FONTS.body4,
              paddingHorizontal: 20,
              textAlign: "justify",
              fontWeight: "100",
              color: COLORS.gray,
              marginBottom: 15,
            }}
          >
            Dr. Bryan. (born September 18, 1951) is an American retired
            neurosurgeon, author, and politician who served as the 17th United
            States Secretary of Housing and Urban Development from 2017 to 2021.
            He was a candidate for President of the United States in the 2016
            Republican primaries. He is considered a pioneer in the field of
            neurosurgery.
          </Text>
        </View>
        {/* WORKING HOURS */}
        <View style={{ marginTop: -27 }}>
          <TextComp title="Working Hours" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 14,
            }}
          >
            <ChipComp title="8:00AM" type="outline" />
            <ChipComp title="6:00PM" />
            <ChipComp title="4:00Am" type="outline" />
          </View>
        </View>
        {/* SECDULES */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: -3,
          }}
        >
          <View>
            <TextComp title="Sechedules" />
          </View>
          <View
            style={{
              paddingTop: 16,
            }}
          >
            <Text>
              <Icon name="chevron-back-outline" size={23} />
              &nbsp; May &nbsp;
              <Icon name="chevron-forward-outline" size={23} />
            </Text>
          </View>
        </View>

        {/*  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 4,
            paddingHorizontal: 10,
          }}
        >
          <DatesComp number="Mon" label="01" />
          <DatesComp number="Tue" label="02" />
          <DatesComp number="Wed" label="03" />
          <DatesComp number="Thur" label="04" />
          <DatesComp number="Fri" label="05" />
        </View>

        {/* btn */}

        <View style={{ padding: 23 }}>
          <Button
            titleStyle={COLORS.white}
            buttonStyle={{
              backgroundColor: COLORS.blue,
              padding: 12,
              borderRadius: 13,
              width: 300,
            }}
            containerStyle={{ alignItems: "center" }}
            title="Appointment"
            onPress={() => {}}
            color={COLORS.black}
            style={styles.btn}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
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

export default DoctorsDetailsScreen;
