import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.jpg")}
        style={{
          width: 200,
          height: 80,
          alignSelf: "center",
          marginBottom: 20,
        }}
        resizeMode="contain"
      />
      <Text style={styles.title}>Bine ai venit în ProFX App! 👋</Text>
      <Text style={styles.subtitle}>
        Vezi ultimele noutăți sau mergi direct la calculatorul de loturi.
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#FFD700",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
  },
});
