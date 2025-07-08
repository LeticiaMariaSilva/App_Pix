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
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Endereco( { navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.text}>Endereço</Text>
      <View style={estilos.containerInput}>
        <MaterialIcons name="add-location-alt" size={22} color="#0468BF" />
        <TextInput
          placeholder="Rua"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <MaterialIcons name="email" size={20} color="#0468BF" />
        <TextInput
          placeholder="Número"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <Entypo name="home" size={20} color="#0468BF" />
        <TextInput
          placeholder="Bairro"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <FontAwesome6 name="map-location-dot" size={20} color="#0468BF" />
        <TextInput
          placeholder="CEP"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <MaterialCommunityIcons name="city" size={24} color="#0468BF" />
        <TextInput
          placeholder="Cidade"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <Entypo name="location" size={20} color="#0468BF" />
        <TextInput
          placeholder="Estado"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <Pressable style={estilos.button} onPress={() => navigation.navigate("Home")}>
        <Text style={estilos.buttonText}>Confirmar </Text>
      </Pressable>
      <View style={estilos.bolaAzul1}></View>
      <View style={estilos.bolaAzul2}></View>
    </View>
  );
}