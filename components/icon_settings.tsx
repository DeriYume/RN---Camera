import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const Settings = () => {
  const [settingsVisible, setSettingsVisible] = useState(false);

  return (
    <>
      <TouchableOpacity 
        onPress={() => setSettingsVisible(true)} 
        style={styles.container}
      >
        <Image 
          source={require("@/assets/img/icon_settings.png")} 
          style={styles.image} 
        />
      </TouchableOpacity>
    </>
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

export default Settings;