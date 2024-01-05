import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppColor } from '../../../constants/AppColor';
const ProfileScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => {
                navigation.navigate("Login");
            }}
        >
            <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColor.themeColor1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 40,
    width: 130,
    borderRadius: 5,
    margin: 10,
},

buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
},
})