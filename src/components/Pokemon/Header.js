import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";

//import de lodash para CammelCase
import { capitalize } from "lodash";

//import para el color dependiendo el tipo
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props) {
  const { name, order, image, type } = props;
  const color = getColorByPokemonType(type);
  const bgStyle = [{ backgroundColor: color, ...styles.bgStyle }];

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bgStyle: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },

  content: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
  },
  name: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "bold",
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: Platform.OS === "android" ? 300 : 250,
    resizeMode: "contain",
  },
});
