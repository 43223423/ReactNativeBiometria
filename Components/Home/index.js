import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./styles";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home(props) {
  useEffect(() => {
    const CheckAuth = async () => {
      const AuthValue = await AsyncStorage.getItem("IsAuthenticated");
      console.log(AuthValue);
      if (!AuthValue) {
        props.navigation.navigate("Login");
        return;
      }
    };
    CheckAuth();
  }, []);

  return (
    <View style={styles.Container}>
      <View style={styles.ContainerTitle}>
        <Text style={styles.TitleText}>Biometria realizada com sucesso!</Text>
      </View>

      <View style={styles.ContainerBtn}>
        <TouchableOpacity
          style={styles.ButtonExit}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.TextBtn}>Clique para sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
