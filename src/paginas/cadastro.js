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
import Feather from "@expo/vector-icons/Feather";
import { apiCliente } from "../services/api";
import { useEffect, useState } from "react";

export default function Cadastro({ navigation, route }) {
  // Função para enviar os dados do cadastro
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");

  const itensCadastro = route.params?.item;

  useEffect(() => {
    if (itensCadastro) {
      setNome(itensCadastro.nome);
      setEmail(itensCadastro.email);
      setPassword(itensCadastro.password);
      setPhone(itensCadastro.phone);
      setCpf(itensCadastro.cpf);
    }
  }, [itensCadastro])

  const salvarCadastro = async () => {
    const validarEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    if (!nome || !password || !phone || !cpf) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!validarEmail(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    try {
      const response = await apiCliente.post("/", {
        nome: nome,
        email: email,
        password: password,
        phone: phone,
        cpf: cpf,
      });

      if (response.status === 200) {
        alert("Cadastro realizado com sucesso!");
        navigation.navigate("Endereco", { item: response.data });
      } else {
        alert("Erro ao realizar cadastro. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao salvar cadastro:", error);
      alert("Ocorreu um erro ao salvar o cadastro. Tente novamente.");
      return;
    }
}

console.log("Dados do cadastro:", {
  nome,
  email,
  password,
  phone,
  cpf,
});


  return (
    <View style={estilos.container2}>
      <Text style={estilos.text}>Cadastro</Text>
      <View style={estilos.containerInput}>
        <FontAwesome5 name="user-alt" size={18} color="#0468BF" />
        <TextInput
          placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>
      <View style={estilos.containerInput}>
        <MaterialIcons name="email" size={20} color="#0468BF" />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <FontAwesome5 name="lock" size={18} color="#0468BF" />
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Senha"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <FontAwesome5 name="phone-alt" size={20} color="#0468BF" />
        <TextInput
          placeholder="Telefone"
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <View style={estilos.containerInput}>
        <FontAwesome name="vcard" size={20} color="#0468BF" />
        <TextInput
          value={cpf}
          onChangeText={setCpf}
          placeholder="CPF"
          placeholderTextColor={"#000000"}
        ></TextInput>
      </View>

      <Pressable
        style={estilos.button}
        onPress={() => navigation.navigate("Endereco")}
      >
        <Text style={estilos.buttonText}>Continuar </Text>
        <Feather name="arrow-right" size={25} color="#FFFFFF" />
      </Pressable>
      <View style={estilos.bolaAzul1}></View>
      <View style={estilos.bolaAzul2}></View>
    </View>
  );
}
