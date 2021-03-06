import React, { useEffect, useState, useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { auth, db } from "../firebase";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((Snapshot) => {
      setChats(
        Snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: ` ${auth.currentUser.displayName} `,
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "#111" },
      headerTintColor: "#111",
      headerLeft: () => (
        <View style={{ marginLeft: 20, marginBottom: 0 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
            <Avatar
              rounded
              source={{
                uri: `${auth.currentUser.photoURL}`,
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginBottom: 0,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="#111" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("AddChat")}
          >
            <SimpleLineIcons name="pencil" size={24} color="#111" />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", {
      id,
      chatName,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <StatusBar backgroundColor="#fff" />
      <>
        <ScrollView style={styles.container}>
          {chats.map(({ id, data: { chatName } }) => (
            <CustomListItem
              key={id}
              id={id}
              chatName={chatName}
              enterChat={enterChat}
            />
          ))}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
