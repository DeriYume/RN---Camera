import React, { ReactNode } from 'react';
import { ImageBackground, View, StyleSheet, StatusBar } from 'react-native';

const Wrap = (props: { children: ReactNode }) => {

  return (
    <ImageBackground source={require('@/assets/img/background.png')} style={styles.bgimg}>
      <View style={styles.wrapper}>
      <StatusBar />
        <View style={styles.container}>
          {props.children}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgimg: {
    flex: 1,
    resizeMode: 'cover',
  },
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default Wrap;