import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../../constants/AppColor'
import { useNavigation } from '@react-navigation/native';

const SuccessScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text
        style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: AppColor.themeColor,
            marginTop: 70,
            marginBottom: 30,
        }}
      >Ticket booking successful !!!</Text>

      <Image
        source={require('../../../../assets/images/shopping.png')}
        style={{
            width: 320,
            height: 320,
            marginBottom: 50,
        }}
      />

      <View style={styles.buttonView}>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => {
                navigation.navigate("AllEvent");
            }}
        >
            <Text style={styles.buttonText}>Goback Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.button}
            onPress={() => {
                navigation.navigate("MyTicket");
            }}
        >
            <Text style={styles.buttonText}>My Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SuccessScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonView: {
        flexDirection: 'row',
    },

    button: {
        backgroundColor: AppColor.themeColor1,
        justifyContent: 'center',
        alignItems: 'center',
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