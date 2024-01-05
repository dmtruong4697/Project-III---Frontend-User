import { Image, Pressable, StyleSheet, TouchableOpacity, View, ScrollView, Text } from 'react-native'
import AllEventScreen from '../screens/homeScreens/eventScreens/AllEventScreen';
import MyTicketScreen from '../screens/homeScreens/ticketScreens/MyTicketScreen';
import ProfileScreen from '../screens/homeScreens/profileScreens/ProfileScreen';
import { AppColor } from '../constants/AppColor';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UsedTicketScreen from '../screens/homeScreens/ticketScreens/UsedTicketScreen';

const Tab = createMaterialTopTabNavigator();

function MyTicketNavigator() {
    return (
      <Tab.Navigator

      >
        <Tab.Screen 
          name="MyTicket" 
          component={MyTicketScreen} 
          options={{
            title: 'Available',
            tabBarActiveTintColor: AppColor.themeColor,
            tabBarIndicatorStyle: {
              backgroundColor: AppColor.themeColor,
            },
            tabBarLabelStyle: {
              fontWeight: 'bold'
            }
          }}
        />

        <Tab.Screen 
          name="UsedTicket" 
          component={UsedTicketScreen} 
          options={{
            title: 'Used Ticket',
            tabBarActiveTintColor: AppColor.themeColor,
            tabBarIndicatorStyle: {
              backgroundColor: AppColor.themeColor,
            },
            tabBarLabelStyle: {
              fontWeight: 'bold'
            }
          }}
        />
      </Tab.Navigator>
    );
  }
export default MyTicketNavigator