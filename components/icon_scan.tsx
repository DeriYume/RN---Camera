import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

const ScanAreaIcon = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require("@/assets/img/icon_scan.png")} style={styles.image} />
      <Text style={styles.text}>Scan Area</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 35,
    height: 35,
  },
  text: {
    fontSize: 12,
    color: '#5A666B',
  },
});

export default ScanAreaIcon;