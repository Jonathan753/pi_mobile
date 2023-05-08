import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo_AgriUrban.png')}
                style={styles.logo}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Já tenho uma conta</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('Sair pressionado')}>
                <Text style={styles.sair}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#86EFAC',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        width: 250,
        height: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    sair: {
        textDecorationLine: 'underline',
        color: '#2A6C73',
        fontSize: 20,
        marginTop: 150,
        borderBottomColor: 'black'
    },
});

