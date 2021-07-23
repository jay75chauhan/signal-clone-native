import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUse) => {
      if (authUse) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
        }}
        style={{ width: 120, height: 120 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email "
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onSubmitEditing={signIn}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button title="Login" containerStyle={styles.button} onPress={signIn} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
        type="outline"
      />
      {/* <view style={{height:100}} ></view> */}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "white",
  },
  inputContainer: {
    marginTop: 15,
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
