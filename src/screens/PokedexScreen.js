import React, { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { getPokemonsApi } from "../api/pokemon";

export default function PokedexScreen() {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
