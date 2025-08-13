import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import estilos from "../componentes/EstilosLogin";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function Login(){
 <View style={estilos.home}>
      <View style={estilos.ViewHeader}>
        <View style={estilos.user}>
          <FontAwesome6 name="user" size={24} color="#FFFFFF" />
        </View>
        <View style={estilos.icon_eye}>
          <Ionicons name="eye" size={27} color="#FFFFFF" />
        </View>
        <View style={estilos.icon_help}>
          <Ionicons name="help-circle-outline" size={29} color="#FFFFFF" />
        </View>
        <Text style={estilos.textHeader}> Olá, User</Text>
      </View>

      <Text style={estilos.textSaldo}>Saldo em conta:</Text>
      <Text style={estilos.textValor}>R$ 1,00</Text>

      <View style={estilos.containerBotoes}>
        <TouchableOpacity style={estilos.containerBotoes}>
          <View style={estilos.buttonHome}>
            <MaterialIcons name="pix" size={40} color="#0468BF" />
            <Text style={estilos.textButtonPix}>Enviar Pix</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.containerBotoes}>
          <View style={estilos.buttonHome}>
            <FontAwesome name="send" size={32} color="#0468BF" />
            <Text style={estilos.textButtonPix}>Receber Pix</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={estilos.containerBotoes}>
        <TouchableOpacity style={estilos.containerBotoes}>
          <View style={estilos.buttonHome}>
            <FontAwesome5 name="key" size={32} color="#0468BF" />
            <Text style={estilos.textButtonPix}>Minhas Chaves</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.containerBotoes}>
          <View style={estilos.buttonHome}>
            <FontAwesome5 name="book-open" size={32} color="#0468BF" />
            <Text style={estilos.textButtonPix}>Histórico</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={estilos.translacoes}>
        <Text style={estilos.translacoesTitulo}>Transações Recentes</Text>
        <View style={estilos.translacoesDias}>
          <Text style={estilos.textTranslacoesDias}>Quarta-Feira</Text>

          <View style={estilos.translacoesDias2}>
            <View style={estilos.translacoesIcon}>
              <Ionicons
                name="arrow-up-circle-outline"
                size={33}
                color="#29702B"
              />
            </View>
            <View style={estilos.translacoesInfo}>
              <Text style={estilos.TranslocoesTipo}>Pix recebido:</Text>
              <Text style={estilos.TranslocoesNome}>
                Aparecida Raimunda da Silva
              </Text>
            </View>
            <Text style={estilos.TranslocoesSaldo}>R$ 15,00</Text>
          </View>
        </View>
      </View>

      <View style={estilos.NavBar}>
        <TouchableOpacity style={estilos.NavBarButton}>
          <MaterialIcons name="home" size={30} color="#FFFFFF" />
          <Text style={estilos.NavBarTextHome}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.NavBarButton}>
          <MaterialIcons name="pix" size={30} color="#FFFFFF" />
          <Text style={estilos.NavBarText}>Área pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.NavBarButton}>
          <FontAwesome5 name="book-open" size={27} color="#FFFFFF" />
          <Text style={estilos.NavBarText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.NavBarButton}>
          <FontAwesome5 name="user-alt" size={20} color="#FFFFFF" />
          <Text style={estilos.NavBarText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
}
