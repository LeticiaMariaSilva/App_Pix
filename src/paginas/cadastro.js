import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import estilos from "../componentes/Estilos";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from '@expo/vector-icons/Feather';

export default function Cadastro() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.text}>Cadastro</Text>
      <View style={estilos.containerInput}>
        <FontAwesome5 name="user-alt" size={18} color="#0468BF" />
        <TextInput
          placeholder="Nome"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>
      <View style={estilos.containerInput}>
        <MaterialIcons name="email" size={20} color="#0468BF" />
        <TextInput
          placeholder="Email"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <FontAwesome5 name="lock" size={18} color="#0468BF" />
        <TextInput
          placeholder="Senha"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <FontAwesome5 name="phone-alt" size={20} color="#0468BF" />
        <TextInput
          placeholder="Telefone"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <FontAwesome name="vcard" size={20} color="#0468BF" />
        <TextInput
          placeholder="CPF"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <MaterialIcons name="work" size={22} color="#0468BF" />
        <TextInput
          placeholder="CNPJ"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <Pressable style={estilos.button}>
        <Text style={estilos.buttonText}>Continuar </Text>{" "}
        <Feather name="arrow-right" size={26} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}
