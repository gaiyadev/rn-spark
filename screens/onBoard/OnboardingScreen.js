import React, { useEffect, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { onBoardings } from "../../data/onboard";
import { COLORS, FONTS, SIZES } from "../../constants/onboard";
import Button from "../../components/forms/Button";
const OnboardScreen = ({ navigation }) => {
  const [completed, setCompleted] = useState(false);

  const scrollX = new Animated.Value(0);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });
    return () => scrollX.removeListener();
  }, []);

  // Render
  const RenderContent = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {onBoardings.map((item, index) => (
          <View key={`img-${item.id}`} style={styles.imageAndTextContainer}>
            <View
              style={{
                flex: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <View
              style={{
                position: "absolute",
                bottom: "10%",
                left: 40,
                right: 40,
              }}
            >
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.gray,
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: "center",
                  marginTop: SIZES.base,
                  color: COLORS.black,
                }}
              >
                {item.description}
              </Text>
            </View>
            {/* Button */}
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: 150,
                height: 50,
                paddingLeft: 20,
                justifyContent: "center",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                backgroundColor: COLORS.blue,
              }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ ...FONTS.h1, color: COLORS.white }}>
                {completed ? "Let's Go" : "Skip"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  const RenderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${item.id}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>{RenderContent()}</View>
      <View style={styles.dotsRootContainer}>{RenderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  imageAndTextContainer: {
    width: SIZES.width,
  },
  dotsRootContainer: {
    position: "absolute",
    bottom: SIZES.height > 700 ? "20%" : "16%",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.padding / 2,
    marginBottom: SIZES.padding * 3,
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
});

export default OnboardScreen;
