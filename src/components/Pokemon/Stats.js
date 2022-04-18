import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { map, capitalize } from "lodash";

export default function Stats(props) {
  const { stats } = props;

  //Funcion para saber hasta donde llena la barra y dependiendo el numero se muestra un color u otro

  const barProgress = (num) => {
    let color = "#ff";

    if (num <= 24) {
      color = "#ff3e3e";
    } else if (num >= 25 && num <= 74) {
      color = "#ff8000";
    } else if (num >= 75) {
      color = "#00ac17";
    }
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>

            <View style={styles.bgBar}>
              <View style={[styles.bar, barProgress(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

//Estilos
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#2b2b2b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
