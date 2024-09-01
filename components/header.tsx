import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = (props: { children: ReactNode }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    margin: 5,
    alignSelf: 'center',
  },
});

export default Header;