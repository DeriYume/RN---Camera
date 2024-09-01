import React from "react";
import { Stack } from "expo-router";

const options = {
  headerShown: false,
  contentStyle: { backgroundColor: 'transparent' }
};

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={options} />
      <Stack.Screen name="CameraScreen" options={options} />
    </Stack>
  );
};

export default RootLayout;
