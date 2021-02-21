import 'react-native-gesture-handler';

import React, { useEffect, useState } from "react";
// import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, Button, StyleSheet, Text, View } from "react-native";
import MyProfile  from './src/components/TextReverser'
import ThirdComponent from "./src/components/ThirdComponent";
import HomeScreen from "./src/components/HomeScreen";
import Animated from "react-native-reanimated";

const Stack = createStackNavigator();


const App = () => {
  return (
    <MyStack/>
  )
}

const useName = (initialValue) => {
  const [name, setName] = useState(initialValue)
  useEffect(() => {
    console.log(name)
  }, [name])
  return [name, setName]

}

const useSurname = (initialValue) => {
  const [surname, setSurname] = useState(initialValue)
  useEffect(() => {
    console.log(surname)
  }, [surname])
  return [surname, setSurname]
}


const MyStack = () => {

  const [myName, setMyName ] = useName("empty")
  const [mySurname, setMySurname] = useSurname("empty")
  return (
    <View>
      <TextInput
        placeholder={'Text here'}
        onChangeText={text => setMyName(text)}
      />
      <Text>
        {myName}
      </Text>
      <TextInput
        placeholder={"surname here"}
        onChangeText={text => {
          if (text){
            setMySurname(text);
          } else {
            setMySurname("empty")
          }
        }}
      />
      <Text>
        {mySurname}
      </Text>

    </View>
  )

}

// {
//
//   return(
//
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'HOMEMMEMEME'}}
//         />
//         <Stack.Screen
//           name="Profile"
//           component={MyProfile}
//           options={{ title: 'govno'}}
//         />
//         <Stack.Screen
//           name={"ThirdComponent"}
//           component={ThirdComponent}
//           options={{ title: 'boom component'}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//
//   );
// }


export default App;

