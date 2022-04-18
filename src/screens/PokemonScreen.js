import { View, Text } from "react-native";
import React from "react";

export default function PokemonScreen(props) {
  const { navigation, route } = props;
  console.log(route);
  return (
    <View>
      <Text>Estamos en un pokemon</Text>
    </View>
  );
}
