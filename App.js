import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "./src/paginas/cadastro";
import Endereco from "./src/paginas/endereco";
import Home from "./src/paginas/home";
import Login from "./src/paginas/login";
import TelaInicial from "./src/paginas/telaInicial";
import { Provider as PapeProvider } from "react-native-paper";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <PapeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login'}}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro'}}/>
          <Stack.Screen name="Endereco" component={Endereco} options={{ title: 'Endereço'}}/>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home'}}/>
          <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ title: 'Tela Inicial'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PapeProvider>
  );
}
