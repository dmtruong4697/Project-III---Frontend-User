import { Image, Pressable, StyleSheet, TouchableOpacity, View, ScrollView, Text } from 'react-native'
import AllEventScreen from '../screens/homeScreens/eventScreens/AllEventScreen';
import MyTicketScreen from '../screens/homeScreens/ticketScreens/MyTicketScreen';
import ProfileScreen from '../screens/homeScreens/profileScreens/ProfileScreen';
import { AppColor } from '../constants/AppColor';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen 
        name="AllEvent" 
        component={AllEventScreen} 
        options={{
          //headerShown: false,
          headerTitle: 'Project III',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 16,
          },
          headerStyle: {
            height: 40,
          },
          tabBarIcon: ({focused}) => {return <Image style={{height: 28, width: 28, }} source= {require('../../assets/icons/calendar/calendar.png')}/>},
          headerRight: () => 
            <TouchableOpacity>
              <Image style={{height: 28, width: 28, marginRight: 10, }} source= {require('../../assets/icons/search/search.png')}/>
            </TouchableOpacity>
        }}
      />
      <Tab.Screen 
        name="MyTicket" 
        component={MyTicketScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {return <Image style={{height: 28, width: 28, }} source= {require('../../assets/icons/ticket/ticket.png')}/>}
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {return <Image style={{height: 28, width: 28, }} source= {require('../../assets/icons/profile/profile.png')}/>}
        }}
      />
    </Tab.Navigator>
  );
}
export default HomeNavigator