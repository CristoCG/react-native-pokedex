import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import useAuth from "../../hooks/useAuth";

export default function UserData() {
  const { auth, logout } = useAuth();
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido...</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu
          title="Nombre: "
          text={`${auth.firstName} ${auth.lastName}`}
        />
        <ItemMenu title="Username: " text={`${auth.username}`} />
        <ItemMenu title="Email: " text={`${auth.email}`} />
        <ItemMenu
          title="Total de favoritos: "
          text={`${auth.total} Pokemons`}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={logout}>
          <View style={styles.button}>
            <Text>Cerrar sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text style={styles.itemMenuText}>{text}</Text>
    </View>
  );
}

//Estilos
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  buttonView: {
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#CFCFCF",
    width: 110,
    borderRadius: 333,
    padding: 10,
  },
});
