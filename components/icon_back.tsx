import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { router } from "expo-router";

const Back = () => {
  return (
    <TouchableOpacity onPress={() => router.back()} style={styles.container}>
      <Image source={require("@/assets/img/icon_back.png")} style={styles.image} />
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
    resizeMode: 'contain'
  },
});

export default Back;