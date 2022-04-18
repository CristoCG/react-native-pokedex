import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { getUniquePokemonDetailApi } from "../api/pokemon";

import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";

export default function PokemonScreen(props) {
  const { navigation, route } = props;

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
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
    </ScrollView>
  );
}
