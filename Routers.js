import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Components/Login";
import Home from "./Components/Home";

const Pilha = createStackNavigator();

export default function Routers() {
  return (
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen
          name="Home"
          component={Home}
          options={{ title: false, headerShown: false }}
        />

        <Pilha.Screen
          name="Login"
          component={Login}
          options={{ title: false, headerShown: false }}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}
