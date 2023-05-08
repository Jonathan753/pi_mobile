import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Login() {

    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo_AgriUrban.png')}
                style={styles.logo}
            />
            <TouchableOpacity style={styles.imagemContainer} onPress={() => setSelected1(!selected1)}>
                <Image
                    source={selected1 ? require('../assets/Rectangle.png') : require('../assets/outro.png')}
                    style={styles.imagem}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imagemContainer} onPress={() => setSelected2(!selected2)}>
                <Image
                    source={selected2 ? require('../assets/Rectangle.png') : require('../assets/outro.png')}
                    style={styles.imagem}
                />
            </TouchableOpacity>
            {(selected1 || selected2) && (
                <TouchableOpacity style={styles.botao} onPress={() => console.log('Confirmar pressionado')}>
                    <Text style={styles.textoBotao}>Confirmar</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    imagemContainer: {
        // flex: 1,
        margin: 5,
    },
    imagem: {
        width: 150,
        height: 150,
        aspectRatio: 1,
        borderRadius: 10,
    },
    logo: {
        width: 211,
        height: 124,
        marginBottom: 50,
    },
    botao: {
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
    textoBotao: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});






