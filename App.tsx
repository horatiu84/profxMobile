import React, { useState, useEffect } from "react";
import { View } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import CalculatorScreen from "./screens/CalculatorScreen";
import TrainingScreen from "./screens/TrainingScreen";
import HelpScreen from "./screens/HelpScreen";
import { enableScreens } from "react-native-screens";
enableScreens();

const Tab = createBottomTabNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: any;

            if (route.name === "Home") iconName = "home-outline";
            else if (route.name === "Calculator")
              iconName = "calculator-outline";
            else if (route.name === "Training") iconName = "book-outline";
            else if (route.name === "Help") iconName = "help-circle-outline";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FFD700",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarStyle: { backgroundColor: "black", borderTopWidth: 0 },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calculator" component={CalculatorScreen} />
        <Tab.Screen name="Training" component={TrainingScreen} />
        <Tab.Screen name="Help" component={HelpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
