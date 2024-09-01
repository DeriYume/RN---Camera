import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";

const VerticalIcons = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity>
            <Image style={styles.icon} source={require("@/assets/img/icon_rec.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={require("@/assets/img/icon_mic.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={require("@/assets/img/icon_gallery.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity>
            <Image style={styles.icon} source={require("@/assets/img/icon_stop.png")} />
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
  },
  icon: {
    margin: 10,
    width: 40,
    height: 40
  }
});

export default VerticalIcons;
