import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyTicketCard from '../../../components/MyTicketCard'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { BackendUrl } from '../../../constants/BackendUrl';
import axios from 'axios';

const UsedTicketScreen = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [refreshing, setRefreshing] = React.useState(false);

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
      return response.data.user.tickets;
      console.log(ticketList);
    } catch (error) {
      console.error("Error during getting profile detail:", error.response.data);
    }
  };

  useEffect(() => {
    getProfileDetail();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getProfileDetail()
      .then(tickets => {
        setTicketList(tickets);
        //console.log(events);
      });
    }, 500);
  }, []);

  return (
      <View style={styles.container}>
        {/* <Text
          style={{
            margin: 5,
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >Vé đã mua:</Text> */}

        <FlatList
          data={ticketList.filter((item) => item.status !== "AVAILABLE")}
          renderItem={({ item }) => <MyTicketCard ticketDetail={item}/>}
          keyExtractor={(item) => item._id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{height: '100%',}}
          
          //inverted={true}
        />
      </View>
  )
}

export default UsedTicketScreen

const styles = StyleSheet.create({
  container: {

  }
})