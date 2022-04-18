import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import { getUniquePokemonDetailApi } from "../api/pokemon";

import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";

import Icon from "react-native-vector-icons/FontAwesome5";

export default function PokemonScreen(props) {
  const { navigation, route } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      //icono de favoritos iria aquí
      headerRight: () => (
        <Icon
          name="heart"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() => {
            console.log("Añadirlo a favoritos");
          }}
        />
      ),

      //Cambiar el icono para volver atrás
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, route.params]);

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
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
