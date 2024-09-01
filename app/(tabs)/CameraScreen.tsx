import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Wrap from "@/components/wrap";
import Header from "@/components/header";
import HorizontalIcons from "@/components/icons_horizontal";
import VerticalIcons from "@/components/icons_vertical";
import DistanceImage from "@/components/distanceImage";
import Joystick from "@/components/joystick";
import Footer from "@/components/footer";
import CameraComponent from "@/components/Camera";

const CameraScreen = () => {
  const [distance, setDistance] = useState(1);

  const handleDistanceChange = () => {
    setDistance((prevDistance) => {
      if (prevDistance === 3) return 1;
      if (prevDistance === 2) return 3;
      return 2;
    });
  };

  return (
    <Wrap>
      <CameraComponent>
        <Header>
          <HorizontalIcons />
        </Header>

        <View style={styles.content}>
          <View style={styles.sideContainer}></View>
          <View style={styles.centerContent}><DistanceImage distance={distance} /></View>
          <View style={styles.sideContainer}><VerticalIcons /></View>
        </View>

        <View style={styles.joystickContainer}><Joystick onUpPress={handleDistanceChange} /></View>
        <Footer>
          <View />
        </Footer>
      </CameraComponent>
    </Wrap>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  sideContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  joystickContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default CameraScreen;