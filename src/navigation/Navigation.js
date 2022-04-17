import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";

{
  /*Import de las screens*/
}
import PokedexNavigation from "./PokedexNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

     
      <Tab.Screen
        name="pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
            tabBarIcon: () => renderPokeball(),
          headerShown:false,
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
