import React from 'react';
import { View, StyleSheet } from 'react-native';
import Back from '@/components/icon_back';
import ScanArea from '@/components/icon_scan';
import Location from '@/components/icon_location';
import Battery from '@/components/icon_battery';
import Settings from '@/components/icon_settings';

const HorizontalIcons = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.leftSection}>
        <Back />
      </View>
      <View style={styles.section}>
        <ScanArea />
      </View>
      <View style={styles.rightSection}>
        <Location />
        <Battery />
        <Settings />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSection: {
    width: '33%',
    flexDirection: 'row',
  },
  section: {
    width: '33%',
    alignItems: 'center',
  },
  rightSection: {
    width: '33%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default HorizontalIcons;