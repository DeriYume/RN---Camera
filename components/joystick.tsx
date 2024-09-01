import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

type JoystickProps = {
  onUpPress: () => void;
};

const Joystick = ({ onUpPress }: JoystickProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onUpPress}>
        <Image source={require("@/assets/img/mov_up.png")} />
      </TouchableOpacity>

      <View style={styles.middleRow}>
        <TouchableOpacity>
          <Image source={require("@/assets/img/mov_left.png")} />
        </TouchableOpacity>

        <Image source={require("@/assets/img/mov_center.png")} />

        <TouchableOpacity>
          <Image source={require("@/assets/img/mov_right.png")} />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity>
          <Image source={require("@/assets/img/mov_down.png")} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

export default Joystick;