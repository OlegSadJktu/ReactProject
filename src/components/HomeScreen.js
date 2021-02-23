import React, {useEffect} from "react"
import {Text, Button, View } from "react-native";


const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text>
        sadasd
      </Text>

    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {
          name: 'Jane',
          numOfScreen: 1
        })
      }
    />
    </View>

  );
};











export default HomeScreen
