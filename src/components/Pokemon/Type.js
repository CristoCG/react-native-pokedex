import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { capitalize, map } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Type({ types }) {
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        //Se necesita una key que es el index de la iteración
        <View
          key={index}
          style={{
            ...styles.pills,
            backgroundColor: getColorByPokemonType(item.type.name),
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pills: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
