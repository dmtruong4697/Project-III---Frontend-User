import { FlatList, Image, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import EventCard from '../../../components/EventCard'
import { useDispatch, useSelector } from 'react-redux';
import { BackendUrl } from '../../../constants/BackendUrl';
import axios from 'axios';
//import { getAllEvent } from '../../../redux/sagas/event.saga';

const AllEventScreen = () => {

  const [refreshing, setRefreshing] = React.useState(false);
  const [eventsData, setEventsData] = useState([]);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  //const backend = 'http://192.168.1.152:3000/api';

  const getAllEvent = async () => {
    try {
      const response = await axios.post(`${BackendUrl.backendUrl}/all-event`,
      // {
      //   headers: {
      //     Authorization: currentUser.token,
      //   }
      // }
      );

      if (response.status == 200) {
        const events = response.data.events.reverse();
        return events;
      } else {
        
      }
    } catch (error) {
      console.error("Error during get:", error);
    }
};

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getAllEvent()
      .then(events => {
        setEventsData(events);
        console.log(events);
      });
    }, 500);
  }, []);

  useEffect(() => {
    getAllEvent()
      .then(events => {
        setEventsData(events);
        console.log(events);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={eventsData}
        renderItem={({ item }) => <EventCard eventDetail={item}/>}
        keyExtractor={(item) => item._id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        //inverted={true}
      />
    </View>
  )
}

export default AllEventScreen

const styles = StyleSheet.create({})