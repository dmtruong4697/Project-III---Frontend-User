import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyTicketCard from '../../../components/MyTicketCard'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { BackendUrl } from '../../../constants/BackendUrl';
import axios from 'axios';

const MyTicketScreen = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [ticketList, setTicketList] = useState([]);

  const getProfileDetail = async () => {
    try {
      const response = await axios.post(`${BackendUrl.backendUrl}/user-profile`,{

      },
      {
        headers: {
          Authorization: currentUser.token,
        }
      });

      setTicketList(response.data.user.tickets);
      console.log(ticketList);
    } catch (error) {
      console.error("Error during getting profile detail:", error.response.data);
    }
  };

  useEffect(() => {
    getProfileDetail();
  }, []);

  return (
      <View style={styles.container}>
        <Text
          style={{
            margin: 5,
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >Vé đã mua:</Text>

        <View style={styles.ticketList}>
          {ticketList.map((ticket) => 
            <MyTicketCard ticketDetail={ticket}/>
          )}
        </View>
      </View>
  )
}

export default MyTicketScreen

const styles = StyleSheet.create({
  container: {

  }
})