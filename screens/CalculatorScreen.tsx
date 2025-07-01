import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CalculatorScreen = () => {
  const [capital, setCapital] = useState("");
  const [risk, setRisk] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [lotSize, setLotSize] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateLotSize = () => {
    const cap = parseFloat(capital);
    const riskPercent = parseFloat(risk);
    const sl = parseFloat(stopLoss);
    if (cap && riskPercent && sl && sl > 0) {
      const riskAmount = (cap * riskPercent) / 100;
      const calculatedLot = riskAmount / (sl * 10);
      setLotSize(Number(calculatedLot.toFixed(2)));
      setShowResult(true);
    } else {
      setLotSize(null);
      setShowResult(false);
    }
  };

  const resetCalculator = () => {
    setCapital("");
    setRisk("");
    setStopLoss("");
    setLotSize(null);
    setShowResult(false);
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

        <TouchableOpacity style={styles.resetButton} onPress={resetCalculator}>
          <Text style={styles.resetButtonText}>Resetează</Text>
        </TouchableOpacity>

        {lotSize !== null && showResult && (() => {
          const cap = parseFloat(capital);
          const sl = parseFloat(stopLoss);
          const pierdere = lotSize * sl * 10;
          const procentReal = (pierdere / cap) * 100;
          const procentInput = parseFloat(risk);
          const eDepasit = procentReal > procentInput;

          return (
            <View style={{ marginTop: 32 }}>
              <Text style={styles.result}>Lot Size: {lotSize}</Text>
              <Text style={[styles.loss, eDepasit && styles.lossAlert]}>
                Pierdere estimată: ${pierdere.toFixed(2)} ({procentReal.toFixed(2)}%)
              </Text>
              {eDepasit && (
                <Text style={styles.warning}>⚠️ Atenție: ai depășit riscul dorit!</Text>
              )}
            </View>
          );
        })()}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CalculatorScreen;

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
  resetButton: {
    backgroundColor: "#444",
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
  },
  resetButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  result: {
    fontSize: 20,
    fontWeight: "600",
    color: "#00ff99",
    textAlign: "center",
    marginBottom: 8,
  },
  loss: {
    fontSize: 16,
    color: "#f1f1f1",
    textAlign: "center",
  },
  lossAlert: {
    color: "#ff4d4d",
    fontWeight: "bold",
  },
  warning: {
    color: "#ff4d4d",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },
});
