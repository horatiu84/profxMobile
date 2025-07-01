import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";

const tips = [
  "📈 Pro Tip: Riscul mic și disciplina aduc profituri mari.",
  "💡 Nu lăsa emoțiile să decidă. Urmează planul!",
  "🚀 Mic azi, mare mâine – constanța bate intensitatea.",
  "⚖️ Controlează riscul, nu piața.",
  "📊 Un trade bun e un trade planificat.",
  "⏳ Răbdarea este superputerea traderului.",
  "🔎 Analiza înainte de acțiune. Mereu.",
  "🏆 Nu numărul de trade-uri contează, ci calitatea lor.",
];

const HomeScreen = () => {
  const [randomTip, setRandomTip] = useState("");

  useEffect(() => {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    setRandomTip(tip);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Bine ai venit în ProFX App! </Text>
      <Text style={styles.subtitle}>
        Unelte smart pentru decizii inteligente în trading.
      </Text>

      {randomTip !== "" && (
        <View style={styles.tipBox}>
          <Text style={styles.tipText}>{randomTip}</Text>
        </View>
      )}

      <View style={styles.linkBox}>
        <Text style={styles.linkText}>
           Pentru lecții, materiale și resurse complete, vizitează aplicația noastră web :
        </Text>
        <Text
          style={styles.linkUrl}
          onPress={() =>
            Linking.openURL("https://profx-calculator.netlify.app/")
          }
        >
          👉 Accesează versiunea web ProFX aici
        </Text>
      </View>
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
  logo: {
    width: 200,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
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
    marginBottom: 30,
    lineHeight: 22,
  },
  tipBox: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  tipText: {
    fontSize: 15,
    color: "#7dd3fc",
    textAlign: "center",
    fontStyle: "italic",
  },
  linkBox: {
    marginTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#333",
  },
  linkText: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 6,
  },
  linkUrl: {
    fontSize: 15,
    color: "#60a5fa",
    textAlign: "center",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
