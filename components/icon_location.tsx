import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const Location = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require("@/assets/img/icon_location.png")} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Location;