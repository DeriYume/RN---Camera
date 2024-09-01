import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

type DistanceImageProps = {
  distance: number;
};

const DistanceImage = ({ distance }: DistanceImageProps) => {
  const getImageSource = (distance: number) => {
    if (distance === 1) {
      return require("@/assets/img/icon_distanceFar.png");
    } else if (distance === 2) {
      return require("@/assets/img/icon_distanceMid.png");
    } else {
      return require("@/assets/img/icon_distanceClose.png");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.distanceImage} source={getImageSource(distance)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  distanceImage: {
    resizeMode: 'contain'
  }
});

export default DistanceImage;