import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const ProfileScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>ProfileScreen</Text>
      {/* <Button
        onPress={() => {navigation.navigate("Login")}}
      >Log Out</Button> */}
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})