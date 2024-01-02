import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '../constants/AppColor';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const TicketCard = (props) => {

    const {ticketDetail} = props;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const currentEvent = useSelector((state) => state.event.currentEvent);
    const totalFee = useSelector((state) => state.cart.totalFee);
    const cart = useSelector((state) => state.cart.cart);

  return (
    <View style={styles.container}>
      <Text
        style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFFFFF',
        }}
      >{ticketDetail.name}</Text>

      <Text
        style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#FFFFFF',
        }}
      >{currentEvent.name}</Text>

      <Text
        style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#FFFFFF',
        }}
      >Số lượng: {ticketDetail.quantity}</Text>
    </View>
  )
}

export default TicketCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        backgroundColor: AppColor.themeColor,
        padding: 5,
        marginBottom: 10,
        borderRadius: 5,
    }
})