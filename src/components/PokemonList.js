import React from "react";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";

import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  //Función para hacer infinity scroll
  const loadMore = () => {
    console.log("Cargando más pokemons!...");
    loadPokemons();
  };
  return (
    <>
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        //Empieza el infinity scroll y se termina cuando llego al final si isNext == null
        onEndReached={isNext && loadMore}
        //Empieza a cargar antes de que se llegue al final
        onEndReachedThreshold={0.1}
        //Spinner para cuando esté cargando y todavia tenga datos que renderizar
        ListFooterComponent={
          isNext && (
            <ActivityIndicator
              size="large"
              color="AEAEAE"
              style={styles.spinner}
            />
          )
        }
      />
    </>
  );
}

//Estilos
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
