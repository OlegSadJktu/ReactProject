import React, { useEffect, useState } from "react";
import { Button, Switch, Text, TextInput, View } from "react-native";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

const useName = (initialValue) => {
  const [name, setName] = useState(initialValue);
  useEffect(() => {
    console.log(name);
  }, [name]);
  return [name, setName];

};

const useSurname = (initialValue) => {
  const [surname, setSurname] = useState(initialValue);
  useEffect(() => {
    console.log(surname);
  }, [surname]);
  return [surname, setSurname];
};


const MainScreen = () => {

  const { theme, setYellow, setDark, setLight, isDark, isLight, isYellow } = useTheme();
  const [myName, setMyName] = useName("empty");
  const [mySurname, setMySurname] = useSurname("empty");
  const toggleSwitch = (value) => {
    if (value === "DARK") {
      setDark();
    } else if (value === "LIGHT") {
      setLight();
    } else if (value === "YELLOW") {
      setYellow();
    }
    console.log(theme)

  };
  useEffect(() => {
    console.log('render.....')
  })
  return (

    <View
      style={{
        backgroundColor: isDark ? "#222" :
          isYellow ? "#e9ef06"  :
            "#fff",
      }}
    >
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
      }}>
        <Button
          title={"changeTheme"}
          onPress={() => {
            toggleSwitch("DARK");
          }}
          color={"#555"}
        />
        <Button
          title={"changeTheme"}
          onPress={() => {toggleSwitch("LIGHT")}}
          color={"#ccc"}
        />
        <Button
          title={"changeTheme"}
          onPress={() => {
            toggleSwitch("YELLOW");
          }}
          color={"#e9ef06"}
        />

      </View>
      <Text
        style={{
          color: isDark ? "#fff" :
            isYellow ? "#AD66D5"  :
              "#F00",
          fontSize: 30,
          fontWeight: "bold",

        }}
      >
          isDark : {isDark ? "true" : "false"}
      </Text>
      <Text
        style={{
          color: isDark ? "#fff" :
            isYellow ? "#AD66D5"  :
              "#F00",
          fontSize: 30,
          fontWeight: "bold",

        }}
      >
        isLight : {isLight ? "true" : "false"}
      </Text>
      <Text
        style={{
          color: isDark ? "#fff" :
            isYellow ? "#AD66D5"  :
              "#F00",
          fontSize: 30,
          fontWeight: "bold",

        }}
      >
        isYellow : {isYellow ? 'true' : "false"}
      </Text>
      <TextInput
        style={{
          color: isDark ? "#fff" :
            isYellow ? "#AD66D5"  :
              "#F00",
          fontSize: 30,
          fontWeight: "bold",

        }}
        placeholder={"Text here"}
        onChangeText={text => setMyName(text)}
      />
      <Text
        style={{
          color: isDark ? "#fff" :
            isYellow ? "#AD66D5"  :
              "#F00",
          fontSize: 30,
          fontWeight: "bold",

        }}
      >
        {myName ? myName : "empty"}
      </Text>
      <TextInput
        style={{
          color: isDark ? "#fff" :
            isYellow ? "#AD66D5"  :
              "#F00",
          fontSize: 30,
          fontWeight: "bold",

        }}
        placeholder={"surname here"}
        onChangeText={text => {
          text ? setMySurname(text) : setMySurname("empty")
        }}
      />
      <Text
        style={{
          color: isDark ? "#fff" :
            isYellow ? "#AD66D5"  :
              "#F00",
          fontSize: 30,
          fontWeight: "bold",

        }}
      >
        {mySurname.split(" ").reverse().join(" ")}
      </Text>

      </View>

  );
};
export default MainScreen;
