import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useState } from "react";

import InfoContador from './src/components/InfoContador';
import Botao from './src/components/Botao';

export default function App() {

  const [contador, setContador] = useState(0);

  function incrementar(valorIncrementar) {
    let novoValor = contador + valorIncrementar;
    if(novoValor < 0) {
      novoValor = 0;
    }
    setContador(novoValor);
  }

  return (
    <SafeAreaView style={styles.containerGlobal}>
      <InfoContador contador={contador == 0 ? "Nenhum cliente 😥" : contador}/>
      <View style={styles.botoes}>
        <Botao 
          size={"40%"} 
          title="-1" 
          disabled={contador == 0} 
          onPress={() => incrementar(-1)}/>
        <Botao 
          size={"40%"}
          title="+1" 
          onPress={() => incrementar(1)}/>
        <Botao 
          size={"40%"} 
          title="-10"
          top={20}
          disabled={contador < 10} 
          onPress={() => incrementar(-10)}/>
        <Botao 
          size={"40%"} 
          title="+10"
          top={20} 
          onPress={() => incrementar(10)}/>
        <Botao 
          size={"100%"} 
          title="Zerar"
          top={20} 
          onPress={() => incrementar(-contador)}/>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  containerGlobal: {
    display: "flex",
    justifyContent: "center",
    minHeight: "80%"
  },
  botoes: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  },
});