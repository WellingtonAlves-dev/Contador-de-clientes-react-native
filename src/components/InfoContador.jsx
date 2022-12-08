import {View, Text, StyleSheet, Dimensions} from "react-native";

const width = Dimensions.get("screen").width;


export default ({contador}) => {
    return (
      <View style={styles.containerContador}>
        <View style={styles.card}>
          <View>
            <Text style={styles.contador}>{contador}</Text>
          </View>
          <View>
            <Text>Total de clientes</Text>
          </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    containerContador: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "35%",
      },
      card: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
    
      },
      contador: {
        fontSize: width * 0.09
      },
});