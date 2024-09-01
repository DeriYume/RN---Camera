import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const Battery = () => {
  return (
    <TouchableOpacity style={styles.container}>      
      <Image source={require("@/assets/img/icon_battery.png")} style={styles.image} />
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

export default Battery;