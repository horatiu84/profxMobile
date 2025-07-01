import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const agenda = [
  {
    zi: "LUNI",
    activitati: ["MINIM DOUĂ SESIUNI LIVE", "WEBINAR"],
  },
  {
    zi: "MARȚI",
    activitati: ["MINIM DOUĂ SESIUNI LIVE", "WEBINAR ÎNCEPĂTORI"],
  },
  {
    zi: "MIERCURI",
    activitati: ["MINIM DOUĂ SESIUNI LIVE"],
  },
  {
    zi: "JOI",
    activitati: ["MINIM DOUĂ SESIUNI LIVE", "WEBINAR AVANSAȚI"],
  },
  {
    zi: "VINERI",
    activitati: ["MINIM DOUĂ SESIUNI LIVE"],
  },
  {
    zi: "SÂMBĂTĂ",
    activitati: ["RELAXARE"],
  },
  {
    zi: "DUMINICĂ",
    activitati: ["WEBINAR BACKTESTING"],
  },
];

const AgendaScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>📅 Program Săptămânal</Text>

        {agenda.map((zi, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.zi}>{zi.zi}</Text>
            {zi.activitati.map((act, i) => (
              <Text key={i} style={styles.activitate}>• {act}</Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AgendaScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#facc15",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#111827",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  zi: {
    fontSize: 18,
    color: "#60a5fa",
    fontWeight: "bold",
    marginBottom: 8,
  },
  activitate: {
    fontSize: 14,
    color: "#e5e7eb",
    marginLeft: 6,
    marginBottom: 4,
  },
});
