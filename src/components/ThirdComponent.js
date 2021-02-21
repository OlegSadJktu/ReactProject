import { Button } from "react-native";
import React from "react";

const ThirdComponent = ({ navigation }) => {
  return(
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
        // console.log("adasd")
      }
    />
  )
}

export default ThirdComponent
