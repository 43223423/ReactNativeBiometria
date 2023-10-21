import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import * as Auth from "expo-local-authentication";

import { useEffect, useState } from "react";

import styles from "./styles";

import { StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login(props) {
  const [isAuthentication, setIsAuthentication] = useState();

  StatusBar.setHidden(true);

  async function handleAuthentication() {
    const isBiometricEnrolled = await Auth.isEnrolledAsync();

    if (!isBiometricEnrolled) {
      Alert.alert(
        "Login",
        "Nenhuma biometria encontrada. Favor, cadastre em seu dispositivo!"
      );
    }

    const auth = await Auth.authenticateAsync({
      promptMessage: "Login com Biometria",
      fallbackLabel: "Biometria não reconhecida",
    });
    const Success = auth.success;

    if (Success) {
      setIsAuthentication(auth.success);
      AsyncStorage.setItem("IsAuthenticated", isBiometricEnrolled.toString());
      props.navigation.navigate("Home");
    }
  }
  return (
    <View style={styles.Container}>
      <View style={styles.ContainerNavBar}>
        <Text style={{ fontSize: 20, color: "black" }}>Biometria</Text>
      </View>

      <View style={styles.SubContainer}>
        <Text style={styles.TextTitle}>
          Bem-vindo ao aplicativo de Biometria
        </Text>
      </View>

      <View style={styles.ContainerButton}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleAuthentication()}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            Clique para entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
