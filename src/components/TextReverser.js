import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const useReversedName = () => {
  const [text, setText] = useState("");
  useEffect(() => console.log(text));
  return [text, setText];
};

const MyProfile = ({ navigation, route }, props) => {
  useEffect(() => {
    console.log('MyProfile is rendering')

  })
  const [myText, setText] = useState("");
  return (
    <View>
      <Text style={myStyles.text}>
        num : {route.params.numOfScreen}
      </Text>
      <Text style={myStyles.text}>
        {route.params?.name ? route.params.name : "empty"}
      </Text>
      <TextInput
        onChangeText={text => setText(text)}
        style={myStyles.text}
        placeholder="text here"
      />
      <Text
        style={myStyles.text}
      >
        {myText.split(" ").reverse().join(" ")}
      </Text>
      <Button
        title={"BOOM NAXUS"}
        onPress={() => {
          navigation.push("Profile", {
            name: myText,
            numOfScreen: route.params.numOfScreen + 1
          });
        }}
      />
      <Button
        title={"domoi"}
        onPress={() => {
          navigation.popToTop();
        }}
        color={"#449944"}
      />
      <Button
        title={"go back"}
        onPress={() => {
          navigation.goBack();
        }}
        color={"#994444"}
      />

    </View>
  );
};

const myStyles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontStyle: "italic",
    textAlign: "center",
    borderWidth: 2,
  },
});

export default MyProfile;
