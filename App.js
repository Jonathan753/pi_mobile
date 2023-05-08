import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image } from 'react-native';
import Cadastro from './telas/Cadastro'
import Login from './telas/Login'
import Login2 from './telas/Login2'

export default function App() {
  return (
    <View style={styles.tela_fundo}>
      <StatusBar style="auto" />
      {/* <Cadastro></Cadastro> */}
      {/* <Login></Login> */}
      <Login2></Login2>
    </View>
  );
}

const styles = StyleSheet.create({

  tela_fundo: {
    backgroundColor: 'rgb(238, 240, 239)',
    marginTop: Constants.statusBarHeight,
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  image: {
    width: 20,
    height: 20
  }
});

