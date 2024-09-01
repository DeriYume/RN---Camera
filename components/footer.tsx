import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Footer = (props: { children: ReactNode }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.bottom }]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    alignSelf: 'center',
  },
});

export default Footer;