import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Card, ListItem, Rating, Avatar } from "react-native-elements";
import { COLORS } from "../../constants/colors";

const Doctors = (props) => {
  const { name, avatar, id, subtitle, navigation } = props;
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Doctor");
        }}
      >
        <Card
          containerStyle={{
            elevation: 5,
            borderRadius: 12,
            backgroundColor: COLORS.card,
            marginBottom: 4,
          }}
        >
          <ListItem
            containerStyle={{
              backgroundColor: COLORS.white,
            }}
          >
            <Avatar
              avatarStyle={{
                resizeMode: "cover",
              }}
              size="large"
              onPress={() => navigation.navigate("Doctor")}
              source={{ uri: avatar }}
              activeOpacity={0.7}
            />
            <ListItem.Content>
              <ListItem.Title style={{ paddingBottom: 4 }}>
                {name}
              </ListItem.Title>
              <ListItem.Subtitle style={{ paddingBottom: 4 }}>
                {subtitle}
              </ListItem.Subtitle>
              <ListItem.Subtitle>
                <Rating imageSize={18} />
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </Card>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Doctors;
