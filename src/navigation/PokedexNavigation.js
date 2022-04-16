import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          headerTitle: "Pokedex",
        }}
      />

      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          headerTitle: "Pokemon",
        }}
      />
    </Stack.Navigator>
  );
}