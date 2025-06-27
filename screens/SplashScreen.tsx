import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    const timeout = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.pro}>Pro</Text>
      <Animated.Text style={[styles.fx, { transform: [{ scale: scaleAnim }] }]}>
        FX
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pro: {
    fontSize: 40,
    fontWeight: '300',
    color: '#fff',
  },
  fx: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#facc15',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
    borderRadius: 6,
  },
});
