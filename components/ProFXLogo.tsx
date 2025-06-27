import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const ProFXLogo = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.logoContainer}>
      <Text style={styles.pro}>Pro</Text>
      <Animated.Text style={[styles.fx, { transform: [{ scale: scaleAnim }] }]}>
        FX
      </Animated.Text>
    </View>
  );
};

export default ProFXLogo;

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  pro: {
    fontSize: 32,
    fontWeight: '300',
    color: '#fff',
  },
  fx: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#facc15',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 6,
    borderRadius: 6,
  },
});
