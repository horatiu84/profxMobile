import React, { useState } from "react";
import { Image } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const HomeScreen = () => {
  const [capital, setCapital] = useState("");
  const [risk, setRisk] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [lotSize, setLotSize] = useState<number | null>(null);

  const calculateLotSize = () => {
    const cap = parseFloat(capital);
    const riskPercent = parseFloat(risk);
    const sl = parseFloat(stopLoss);
    if (cap && riskPercent && sl && sl > 0) {
      const riskAmount = (cap * riskPercent) / 100;
      const calculatedLot = riskAmount / (sl * 10);
      setLotSize(Number(calculatedLot.toFixed(2)));
    } else {
      setLotSize(null);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
        <Text style={styles.title}>ProFX Calculator</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Capital ($)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={capital}
            onChangeText={setCapital}
            placeholder="Ex: 1000"
            placeholderTextColor="#777"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Risk per Trade (%)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={risk}
            onChangeText={setRisk}
            placeholder="Ex: 2"
            placeholderTextColor="#777"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Stop Loss (pips)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={stopLoss}
            onChangeText={setStopLoss}
            placeholder="Ex: 30"
            placeholderTextColor="#777"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={calculateLotSize}>
          <Text style={styles.buttonText}>Calculează Lotul</Text>
        </TouchableOpacity>

        {lotSize !== null && (
          <Text style={styles.result}>Lot Size: {lotSize}</Text>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#000000",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#facc15",
    marginBottom: 32,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    color: "#f1f1f1",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    borderColor: "#333",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#facc15",
    padding: 14,
    borderRadius: 10,
    marginTop: 24,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  result: {
    marginTop: 32,
    fontSize: 20,
    fontWeight: "600",
    color: "#00ff99",
    textAlign: "center",
  },
});
