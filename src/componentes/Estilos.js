import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0468BF',
        textAlign: 'center',
        paddingTop: 100, 
    },
    input: {
        height: 50,
        borderColor: '#0468BF',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginTop: 34,
        borderWidth: 2,
    },
    containerInput: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#0468BF',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginTop: 26,
        borderWidth: 2,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#77ABD9',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 110,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
})

export default estilos;