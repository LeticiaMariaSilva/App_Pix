import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";


const estilos = StyleSheet.create({
  ViewHeader: {
    paddingTop: 149,
    backgroundColor: "#0468BF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 90,
    width: 360,
    boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.1)",
    justifyContent: "space-between",
  },
  user: {
    width: 46,
    height: 47,
    borderRadius: 50,
    position: "absolute",
    top: 40,
    left: 20,
    borderWidth: 1,
    borderColor: "#0468BF",
    justifyContent: "center",
    alignItems: "center",
  },
   icon_eye: {
    width: 46,
    height: 47,
    position: "absolute",
    top: 50,
    right: 70,
  },
  icon_help: {
    width: 46,
    height: 47,
    position: "absolute",
    top: 50,
    right: 20,
  },
   textHeader: {
    position: "absolute",
    top: 109,
    left: 20,
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  containerSaldo: {
    flex: 1,
    marginTop: 20,
  },
   textSaldo: {
    fontSize: 20,
    color: "#0468BF",
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 20,
    opacity: 0.8,
  },
  textValor: {
    fontSize: 30,
    color: "#0468BF",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  containerBotoes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonHome: {
    width: 130,
    height: 100,
    borderRadius: 20,
    borderColor: "#0468BF",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
  },
  textButtonPix: {
    color: "#0468BF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 2,
  },
    translacoes: {
    width: 300,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#0468BF",
    backgroundColor: "#FFFFFF",
  },
  translacoesTitulo: {
    fontSize: 18,
    color: "#0468BF",
    fontWeight: "bold",
    marginBottom: 16,
  },
  translacoesDias: {
    marginBottom: 16,
  },
  textTranslacoesDias: {
    fontSize: 16,
    color: "#0468BF",
    fontWeight: "600",
    marginBottom: 12,
  },
    translacoesDias2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  translacoesIcon: {
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 3,
  },
  translacoesInfo: {
    flex: 1,
  },
  TranslocoesTipo: {
    fontSize: 14,
    color: "#29702B",
    fontWeight: "500",
  },
  TranslocoesNome: {
    fontSize: 12,
    color: "black",
    fontWeight: "black",
  },
  TranslocoesSaldo: {
    fontSize: 14,
    color: "#29702B",
    fontWeight: "bold",
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#0468BF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 20,
    position: "absolute",
    bottom: -190,
  },
  NavBarButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  NavBarText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 4,
    opacity: 0.7,
  },
  NavBarTextHome: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "bold",
  }
})


export default estilos;
