import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCurrentEvent } from '../redux/actions/event.action';

const EventCard = (props) => {

    const {eventDetail} = props;
    const navigation = useNavigation();
    const dispatch = useDispatch();

  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={() => {
            dispatch(setCurrentEvent(eventDetail));
            navigation.navigate("EventDetail")
        }}
    >
      <View style={styles.image}>

      </View>

      <View style={styles.content}>
        <Text 
            style={{
                fontSize: 14,
                fontWeight: 'bold',
            }}
        >{eventDetail.name}</Text>

        <Text
            style={{
                fontSize: 12,
                //fontWeight: 'bold',
            }}
        >{eventDetail.startTime}</Text>

        <Text
            style={{
                fontSize: 13,
                fontWeight: '600',
            }}
        >{eventDetail.location}</Text>
      </View>

      <View style={styles.location}>

      </View>
    </TouchableOpacity>
  )
}

export default EventCard

const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: 'auto',
        alignSelf: 'center',
        marginBottom: 10,
        padding: 5,
        borderRadius: 3,
        borderWidth: 1.5,
        borderColor: '#cccccc',
        //backgroundColor: 'pink',
    },

    image: {
        width: '100%',
        height: 130,
        backgroundColor: 'white',
        borderRadius: 3,
        marginBottom: 5,
    },

    content: {

    },

    location: {

    },
})