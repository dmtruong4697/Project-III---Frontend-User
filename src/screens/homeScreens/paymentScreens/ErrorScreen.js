import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../../constants/AppColor'
import { useNavigation } from '@react-navigation/native';

const ErrorScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text
        style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#ff3333',
            marginTop: 70,
            marginBottom: 30,
        }}
      >Ticket booking error !!!</Text>

      <Image
        source={require('../../../../assets/images/payment-error.png')}
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
                navigation.navigate("EventDetail");
            }}
        >
            <Text style={styles.buttonText}>Repurchase</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ErrorScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonView: {
        flexDirection: 'row',
    },

    button: {
        backgroundColor: '#ff3333',
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