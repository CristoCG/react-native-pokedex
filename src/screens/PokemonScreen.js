import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getUniquePokemonDetailApi } from "../api/pokemon";

//import de lodash para CammelCase
import { capitalize } from "lodash";

export default function PokemonScreen(props) {
  const { navigation, route } = props;

  console.log(route.params.id);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    //Función anónima autoejecutable
    (async () => {
      try {
        const response = await getUniquePokemonDetailApi(route.params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [route.params]);

  //Solo si tiene informacion se hace el return
  if (!pokemon) return null;

  return (
    <View>
      <Text>Estamos en un pokemon</Text>
      <Text>{capitalize(pokemon.name)}</Text>
    </View>
  );
}
