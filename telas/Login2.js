import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleCadastrarPress = () => {
        // Lógica para cadastrar o usuário
        console.log('Cadastrar pressionado');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo_AgriUrban.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.formularioContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    secureTextEntry={true}
                    onChangeText={setSenha}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar senha"
                    value={confirmarSenha}
                    secureTextEntry={true}
                    onChangeText={setConfirmarSenha}
                />
                <TouchableOpacity style={styles.botao} onPress={handleCadastrarPress}>
                    <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    logo: {
        width: 211,
        height: 124,
    },
    formularioContainer: {
        marginHorizontal: 20,
        marginTop: 50,
    },
    input: {
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        padding: 10,
        width: 300,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    botao: {
        backgroundColor: '#86EFAC',
        borderRadius: 10,
        padding: 15,
        marginTop: 250,
        marginLeft: 'auto',
        marginRight: 'auto',
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
    textoBotao: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
