import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Copyright = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Re4Life 2023 ©</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    color: '#797979',
  },
});

export default Copyright;