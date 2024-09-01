import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={styles.box}>
      <Image source={require('@/assets/img/re4life.png')} style={styles.logo}/>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 250,
    height: 100,
    alignItems: 'center',
    margin: 15,
  },
  logo: {
    flex: 1,
  }
});

export default Logo;