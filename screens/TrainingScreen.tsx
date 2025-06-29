import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const correctPassword = "profx2025";
const PASSWORD_KEY = "profx_access_password";

const beginnerLinks = [
  { title: "Prezentare Aplicația MT5", url: "https://youtu.be/lfh3VtQnL-4" },
  {
    title: "Paternuri",
    url: "https://youtu.be/6VlTjwkCMUY?si=Jwj892KeW2ySAvxd",
  },
  {
    title: "Webinar Incepatori 10/06/2025",
    url: "https://youtu.be/phhoKeZH44k?si=OH46WM0V3o6NUpAB",
  },
];

const advancedLinks = [
  {
    title: "Lecțiile 1 - 7 de pe canalul nostru",
    url: "https://youtube.com/@profx-romania?si=wA7daxrGD2nedUBj",
  },
  {
    title: "Webinar Fakeouts + Fibo",
    url: "https://youtu.be/F_7HqZYjipM?si=T8hmZTTa4EzuLBXA",
  },
  {
    title: "Idei de Trade - Flaviu",
    url: "https://youtu.be/fBqbevzaIaU?si=Mkhv_hpvNa-H_JsL",
  },
  { title: "Strategie executie + Q&A", url: "https://youtu.be/92jGomG6dnA" },
  { title: "Webinar backtesting 1", url: "https://youtu.be/x7LwzhMsbvo" },
  {
    title: "Backtesting 2",
    url: "https://www.youtube.com/live/rd9Sy8nLlM8?si=Jj3vhPsEGDkGzsC8",
  },
  {
    title: "Viziunea ProFX",
    url: "https://youtu.be/TsCk6YDlJVs?si=l-n_VhvZ0ta92Qqt",
  },
  {
    title: "Backtesting + Q&A",
    url: "https://youtu.be/5NEbOwgwkUc?si=jm5XkdP4DGfVvXNg",
  },
  {
    title: "Backtesting (alt link)",
    url: "https://youtu.be/F_7HqZYjipM?si=vGqR7j_UKxUjV_wU",
  },
  { title: "Fakeouts + Trader Daniel", url: "https://youtu.be/gJV8eGQTE3I" },
  {
    title: "Divergențe în Trading 1",
    url: "https://youtu.be/K4diseWETYQ?si=Tc6tHJSVAGmEYN6i",
  },
  { title: "Divergențe în Trading 2", url: "https://youtu.be/soJP3FEIY08" },
  {
    title: "Intrări pe Impuls & Liquidity",
    url: "https://youtu.be/3Wa8vkqHiFg?si=Bohn8hbXmt54L7lv",
  },
  {
    title: "A doua șansă + Market Structure",
    url: "https://youtu.be/yYkRlBA_cHs?si=2Ax-urncY2_Kzs2O",
  },
  {
    title: "M30 și M15 corelare",
    url: "https://youtu.be/iBy8WbNq9bs?si=Uryhns8QgR79ekbr",
  },
  {
    title: "Backtesting 15/06/2025",
    url: "https://youtu.be/-5Z7re53Uf8?si=37vS7j6RD5C_Nz8E",
  },
];

const TrainingScreen = () => {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState("");
  const [checkingStorage, setCheckingStorage] = useState(true);

  useEffect(() => {
    const checkPassword = async () => {
      const savedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
      if (savedPassword === correctPassword) {
        setAccessGranted(true);
      }
      setCheckingStorage(false);
    };

    checkPassword();
  }, []);

  const handleSubmit = async () => {
    if (password === correctPassword) {
      await AsyncStorage.setItem(PASSWORD_KEY, correctPassword);
      setAccessGranted(true);
      setError("");
    } else {
      setError("Parolă greșită. Încearcă din nou.");
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem(PASSWORD_KEY);
    setAccessGranted(false);
    setPassword("");
  };

  if (checkingStorage) {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Se verifică accesul...</Text>
      </View>
    );
  }

  if (!accessGranted) {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Acces Training ProFX</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Introdu parola"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Accesează</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Salutare ProFX Fam!</Text>
      <Text style={styles.subheading}>
        Găsești mai jos toate materialele noastre video – de la începători până
        la avansați. 💪
      </Text>

      <Text style={styles.sectionTitle}>🟢 Începători</Text>
      {beginnerLinks.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.link}>• {item.title}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>🟠 Avansați</Text>
      {advancedLinks.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.link}>• {item.title}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>🔒 Ieși din sesiune</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TrainingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3b82f6",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 12,
    borderRadius: 8,
    marginTop: 6,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  error: {
    color: "#f87171",
    textAlign: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    marginTop:50,
    fontWeight: "bold",
    color: "#3b82f6",
    marginBottom: 10,
    textAlign: "center",
  },
  subheading: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#facc15",
    marginTop: 24,
    marginBottom: 10,
  },
  link: {
    color: "#38bdf8",
    marginBottom: 8,
    fontSize: 14,
  },
  logout: {
    marginTop: 30,
    color: "#f87171",
    textAlign: "center",
    fontSize: 13,
  },
  logoutButton: {
    marginTop: 10,
    marginBottom: 40,
    padding: 12,
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    borderColor: "#f87171",
    borderWidth: 1,
    alignItems: "center",
  },

  logoutText: {
    color: "#f87171",
    fontWeight: "bold",
  },
});
