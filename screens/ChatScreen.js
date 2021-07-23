import React, { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";

const ChatScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: "https://avatars.githubusercontent.com/u/66429052?v=4",
            }}
          />
          <Text style={{ color: "#fff", marginLeft: 10, fontWeight: "700 " }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
      //   headerLeft: () => (
      //     // <TouchableOpacity
      //     //   style={{ marginLeft: 10 }}
      //     //   onPress={navigation.goBack}
      //     // >
      //     //   <AntDesign name="arrowleft" size={24} color="#fff" />
      //     // </TouchableOpacity>
      //   ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 100,
            marginRight: 10,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
