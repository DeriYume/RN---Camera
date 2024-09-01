import { useCallback, useEffect, useRef, useState, ReactNode } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useCameraPermission, useCameraDevice, Camera } from 'react-native-vision-camera';
import { useFocusEffect } from 'expo-router';

interface CameraScreenProps {
  children: ReactNode;
}

const CameraComponent = ({ children }: CameraScreenProps) => {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  const [isActive, setIsActive] = useState(false);
  const camera = useRef<Camera>(null);

  useFocusEffect(
    useCallback(() => {
      setIsActive(true);
      return () => { setIsActive(false); };
    }, [])
  );

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  if (!hasPermission) {
    return <ActivityIndicator />;
  }

  if (!device) {
    return <Text>Camera device not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CameraComponent;