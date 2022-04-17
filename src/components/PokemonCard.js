import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

//import de lodash para CammelCase
import {capitalize} from "lodash"

import getColorByPokemonType from "../utils/getColorByPokemonType";



export default function PokemonCard(props) {
  const { pokemon } = props;

  //Extraer el string del color
  const pokemonColor = getColorByPokemonType(pokemon.type);

  //Añadir el color dependiendo el tipo de pokemon
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  //Función que se ejecuta al presionar sobre un pokemón
  const goToPokemon = () => {
    console.log(`Ver info de pokemon: ${pokemon.name}`);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.num}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

//Estilos 
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
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  num: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
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
