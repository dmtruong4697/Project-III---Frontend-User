import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentEvent } from '../redux/actions/event.action';
import { AppColor } from '../constants/AppColor';
import { setCurrentTicket } from '../redux/actions/ticket.action';

const MyTicketCard = (props) => {

    const {ticketDetail} = props;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const currentTicket = useSelector((state) => state.ticket.currentTicket);

  return (
    <View 
        style={styles.container}
        // onPress={() => {
        //     dispatch(setCurrentTicket(ticketDetail));
        //     //console.log(currentTicket);
        //     navigation.navigate("TicketDetail")
        // }}
    >
      <View style={styles.image}>
        <Image 
            source={{uri: ticketDetail.eventImage}}
            style={{
                //height: 50,
                width: 'auto',
                height: '100%'
            }}
        />
      </View>

      <TouchableOpacity 
        style={styles.content}
        onPress={() => {
            dispatch(setCurrentTicket(ticketDetail));
            //console.log(currentTicket);
            navigation.navigate("TicketDetail")
        }}
    >
        <View style={{flex: 1,}}>
            <Text 
                style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                }}
            >{ticketDetail.eventName}</Text>

            <Text
                style={{
                    fontSize: 12,
                    //fontWeight: 'bold',
                }}
            >{ticketDetail.name}</Text>

            <Text
                style={{
                    fontSize: 12,
                    //fontWeight: 'bold',
                }}
            >ID: {ticketDetail.id}</Text>
        </View>

        <View style={[styles.tag, {borderColor: (ticketDetail.status == "AVAILABLE")? AppColor.themeColor:'#ff3333',}]}>
            <Text
                style={{
                    color: (ticketDetail.status == "AVAILABLE")? AppColor.themeColor: '#ff3333',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                }}
            >{ticketDetail.status}</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default MyTicketCard

const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: 'auto',
        alignSelf: 'center',
        marginBottom: 20,
        padding: 5,
        borderRadius: 3,
        borderWidth: 1.5,
        borderColor: '#cccccc',
        //backgroundColor: 'pink',
    },

    image: {
        width: '100%',
        height: 90,
        backgroundColor: 'white',
        borderRadius: 3,
        marginBottom: 5,
    },

    content: {
        //backgroundColor: 'pink',
        flexDirection: 'row',
        maxHeight: 100,
    },

    tag: {
        //backgroundColor: 'yellow',
        height: 35,
        padding: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        //alignSelf: 'center',
        marginRight: 5,
        marginLeft: 5,
        borderWidth: 1.8,
        borderRadius: 5,
        //borderColor: (ticketDetail.status == "AVAILABLE")? AppColor.themeColor:'red',
    },
})