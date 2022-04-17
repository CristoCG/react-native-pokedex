import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import React from "react";

export default function PokemonCard(props) {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log(`Ver info de pokemon: ${pokemon.name}`);
    console.log(pokemon);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.num}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor: "grey",
    },
    num: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize:11,
  },
  name: {
      fontWeight: "bold",
      color: "#fff",
      fontSize: 15,
      paddingTop: 10,
    },
    image: {
      position: "absolute",
      bottom: 2,
      right: 2,
      width: 90,
      height: 90,
    },
});
