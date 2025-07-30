import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
      container: {
    flex: 1,
    padding: 20,
    alignContent: "center",
    backgroundColor: "#FFFFFF",
    
  },
    text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0468BF",
    textAlign: "center",
    paddingTop: 100,
  },
   containerInput: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#0468BF",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 30,
    borderWidth: 2,
  },
    button: {
    width: "100%",
    height: 50,
    backgroundColor: "#77ABD9",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 110,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
    bolaAzul1: {
    top: 100,
    left: -50,
    width: 100,
    height: 100,
    backgroundColor: "#0468BF",
    borderRadius: 50,
    opacity: 0.6,
  },
    bolaAzul2: {
    top: -10,
    right: -220,
    width: 150,
    height: 150,
    backgroundColor: "#0468BF",
    borderRadius: 100,
    opacity: 0.6,
  },

})

export default estilos;