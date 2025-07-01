import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HelpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Ajutor ProFX Calculator 📘</Text>

        <Text style={styles.heading}>Ce este aplicația?</Text>
        <Text style={styles.text}>
          ProFX Calculator te ajută să îți gestionezi riscul în tranzacționare, calculând rapid mărimea potrivită a lotului în funcție de capitalul tău, riscul dorit și stop loss-ul ales.
        </Text>

        <Text style={styles.heading}>Ce este un Lot?</Text>
        <Text style={styles.text}>
          Un "lot" reprezintă dimensiunea poziției tale într-o tranzacție. Un lot standard în Forex este 100.000 unități din moneda de bază. În aplicație, vei lucra în mod normal cu micro loturi (ex: 0.01 = 1.000 unități).
        </Text>

        <Text style={styles.heading}>Ce este un Pip?</Text>
        <Text style={styles.text}>
          Un "pip" este unitatea de bază care măsoară variația prețului în tranzacționare. De exemplu, dacă XAU/USD se mișcă de la 3300.20 la 3300.30, asta înseamnă 1 pip diferență.
        </Text>

        <Text style={styles.heading}>Explicații pentru inputuri</Text>

        <Text style={styles.label}>• Capital ($)</Text>
        <Text style={styles.text}>Suma totală din contul tău de tranzacționare.</Text>

        <Text style={styles.label}>• Risk per Trade (%)</Text>
        <Text style={styles.text}>Procentul din capital pe care ești dispus să-l riști într-o singură tranzacție (ex: 1% din 1000$ = 10$).</Text>

        <Text style={styles.label}>• Stop Loss (pips)</Text>
        <Text style={styles.text}>Numărul de pips la care vrei să plasezi stop loss-ul pentru tranzacția ta.</Text>

        <Text style={styles.heading}>Formula de calcul</Text>
        <Text style={styles.text}>
          Lot Size = (Capital * Risc%) / (Stop Loss * 10)
        </Text>

        <Text style={styles.heading}>Atenție!</Text>
        <Text style={styles.text}>
          Dacă riscul real calculat (în funcție de lot și SL) depășește procentul dorit, vei primi o avertizare. Ajustează valorile pentru a respecta riscul propus.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#facc15",
    marginBottom: 24,
    textAlign: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3b82f6",
    marginTop: 20,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#38bdf8",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 10,
  },
});
