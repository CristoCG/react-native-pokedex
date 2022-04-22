import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

//import navigation
import { useNavigation } from "@react-navigation/native";

//import de para firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

import { firebaseConfig } from "../firebase/firebaseConfig";

import {} from "firebase/firebase-app";

//import del hook useAuth
import { useAuth } from "../../hooks/useAuth";

export default function AccountScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const user = useAuth(auth);

  //Para el navigation
  const navigation = useNavigation();

  //Creacion de la cuenta al darle al botón
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Cuenta creada!");
        const user = userCredential.user;
        console.log(user);
        Alert.alert(
          "No se te olvide verificar tu correo para crear la cuenta!\n :)"
        );
        navigation.navigate("Profile");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Se produjo un error: ", error.message);
      });
  };

  //Verificar que si existe la cuenta
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Se entró en la cuenta!");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Profile");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Se produjo un error: ", error.message);
      });
  };

  //Logout
  const logOut = () => {
    signOut().then(() => {
      Alert.alert("Cerraste sesión correctamente.");
    });
  };
  return (
    <>
      {user ? (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <View>
              <View style={styles.login}>
                <View>
                  <Text style={styles.label}>E-mail: </Text>
                  <TextInput
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                    keyboardType="email-address"
                    placeholder="Email..."
                    autoCapitalize="none"
                  />
                </View>
                <View>
                  <Text style={styles.label}>Password: </Text>
                  <TextInput
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    placeholder="Password..."
                    secureTextEntry={true}
                    autoCapitalize="none"
                  />
                </View>
                <TouchableOpacity
                  onPress={handleSignIn}
                  style={[styles.button, { backgroundColor: "#00CFEB90" }]}
                >
                  <Text style={styles.label}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleCreateAccount}
                  style={[styles.button, { backgroundColor: "#6792F090" }]}
                >
                  <Text style={styles.label}>Create Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      ) : (
        navigation.navigate("Profile")
      )}
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  labelContainer: {
    flexDirection: "column",
    padding: 2,
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 17,
    fontWeight: "400",
    color: "#000",
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
    marginBottom: 20,
  },

  login: {
    width: 350,
    height: 500,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    paddingTop: 90,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
});
