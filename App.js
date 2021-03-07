import 'react-native-gesture-handler';

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./src/components/MainScreen";
import { ThemeProvider } from "./src/context/ThemeContext";
import TextReverser from "./src/components/TextReverser";

const Stack = createStackNavigator();


const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'HomeScreen'} component={MainScreen}/>
          <Stack.Screen name={"Profile"} component={TextReverser}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>


  )
}

export default App;



// import 'react-native-gesture-handler';
//
// import React, { useEffect, useState } from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { TextInput, Button, StyleSheet, Text, View } from "react-native";
// import MyProfile  from './src/components/TextReverser'
// import ThirdComponent from "./src/components/ThirdComponent";
// import HomeScreen from "./src/components/HomeScreen";
//
// const Stack = createStackNavigator();
//
//
// const App = () => {
//   return (
//     <View>
//
//       {/*<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>*/}
//       {/*  <View style={{}}>*/}
//       {/*    <Button*/}
//       {/*      title={'darkTheme'}*/}
//       {/*      color={"#071D70"}*/}
//       {/*    />*/}
//       {/*  </View>*/}
//       {/*  <View style={{}}>*/}
//       {/*    <Button*/}
//       {/*      title={'lightTheme'}*/}
//       {/*      color={'#d3dCd6'}*/}
//       {/*    />*/}
//       {/*  </View>*/}
//       {/*  <View style={{}}>*/}
//       {/*    <Button*/}
//       {/*      color={"#FFD300"}*/}
//       {/*      title={'yellowTheme'}*/}
//       {/*    />*/}
//       {/*  </View>*/}
//       {/*</View>*/}
//
//
//       <MyStack/>
//
//     </View>
//
//
//   )
// }
//
// // const useName = (initialValue) => {
// //   const [name, setName] = useState(initialValue)
// //   useEffect(() => {
// //     console.log(name)
// //   }, [name])
// //   return [name, setName]
// //
// // }
// //
// // const useSurname = (initialValue) => {
// //   const [surname, setSurname] = useState(initialValue)
// //   useEffect(() => {
// //     console.log(surname)
// //   }, [surname])
// //   return [surname, setSurname]
// // }
// //
// //
// // const MyStack = () => {
// //
// //   const [myName, setMyName ] = useName("empty")
// //   const [mySurname, setMySurname] = useSurname("empty")
// //   return (
// //     <View>
// //       <TextInput
// //         placeholder={'Text here'}
// //         onChangeText={text => setMyName(text)}
// //       />
// //       <Text>
// //         {myName}
// //       </Text>
// //       <TextInput
// //         placeholder={"surname here"}
// //         onChangeText={text => {
// //           if (text){
// //             setMySurname(text);
// //           } else {
// //             setMySurname("empty")
// //           }
// //         }}
// //       />
// //       <Text>
// //         {mySurname}
// //       </Text>
// //
// //     </View>
// //   )
// //
// // }
//
// const MyStack = () => {
//
//   return(
//     <View>
//       <Text>
//         'asd'
//       </Text>
//       {/*<NavigationContainer>*/}
//       {/*  <Stack.Navigator>*/}
//       {/*    <Stack.Screen name={"main"} />*/}
//       {/*  </Stack.Navigator>*/}
//       {/*</NavigationContainer>*/}
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{ title: 'HOMEMMEMEME'}}
//           />
//           <Stack.Screen
//             name="Profile"
//             component={MyProfile}
//             options={{ title: 'govno'}}
//           />
//           <Stack.Screen
//             name={"ThirdComponent"}
//             component={ThirdComponent}
//             options={{ title: 'boom component'}}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//       <Text>
//         'asdas'
//       </Text>
//     </View>
//
//
//   );
// }
//
//
// export default MyStack;
//
