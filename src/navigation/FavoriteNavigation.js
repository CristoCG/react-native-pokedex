import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FavoriteScreen from "../screens/FavoriteScreen";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          headerTitle: "Favoritos",
        }}
      />
    </Stack.Navigator>
  );
}
