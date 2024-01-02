import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/authScreens/LoginScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import ForgotPasswordScreen from '../screens/authScreens/ForgotPasswordScreen';
import HomeNavigator from './HomeNavigator';
import EventDetailScreen from '../screens/homeScreens/eventScreens/EventDetailScreen';
import { Image } from 'react-native-svg';
import PlaceOrderScreen from '../screens/homeScreens/paymentScreens/PlaceOrderScreen';
import SuccessScreen from '../screens/homeScreens/paymentScreens/SuccessScreen';
import ErrorScreen from '../screens/homeScreens/paymentScreens/ErrorScreen';
import TicketDetailScreen from '../screens/homeScreens/ticketScreens/TicketDetailScreen';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
        <Stack.Navigator>

            <Stack.Group>
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name='SignUp'
                    component={SignUpScreen}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name='ForgotPassword'
                    component={ForgotPasswordScreen}
                />
            </Stack.Group>

            <Stack.Screen
                name={'Home'}
                component={HomeNavigator}
                options={{title: 'Home', headerShown: false}}
            />

            <Stack.Screen
                name={'EventDetail'}
                component={EventDetailScreen}
                options={{
                    headerTitle: 'Event Detail',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        //backgroundColor: 'pink',
                    },
                    
                }}
            />

            <Stack.Screen
                name={'PlaceOrder'}
                component={PlaceOrderScreen}
                options={{
                    headerTitle: 'Place Order',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        //backgroundColor: 'pink',
                    },
                    
                }}
            />

            <Stack.Screen
                name={'Success'}
                component={SuccessScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={'Error'}
                component={ErrorScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={'TicketDetail'}
                component={TicketDetailScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})