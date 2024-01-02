import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cart.action';

const TicketTypeCard = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const totalFee = useSelector((state) => state.cart.totalFee);
    const {ticketDetail} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [ticketQuantity, setTicketQuantity] = useState(0);

    const formattedPrice = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(ticketDetail.price);

    useEffect(() => {
        console.log(cart);
        console.log(totalFee);
    },[cart]);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.ticketName}
        onPress={() => {
            setIsOpen(!isOpen);
        }}
      >
        {(isOpen == false) && <Image style={{height: 28, width: 28, }} source= {require('../../assets/icons/down/down.png')}/>}
        {(isOpen == true) && <Image style={{height: 28, width: 28, }} source= {require('../../assets/icons/up/up.png')}/>}
        <Text
            style={{
                fontSize: 16,
                fontWeight: 'bold',
            }}
        >{ticketDetail.name}</Text>
      </TouchableOpacity>
         
      {(isOpen) && 
        <View style={styles.ticketDetail}>
            <View style={{flex: 1,}}>
                <View style={{flexDirection: 'row'}}>
                <Text
                    style={{
                        fontSize: 15,
                    }}
                >Giá vé: {formattedPrice} </Text>
                </View>

                <Text
                    style={{
                        fontSize: 15,
                    }}
                >Số lượng: {ticketDetail.ticketList.length}</Text>
            </View>

            <View style={styles.option}>
                <TouchableOpacity
                    onPress={() => {
                        setTicketQuantity(ticketQuantity - 1);
                        dispatch(removeFromCart({
                            name: ticketDetail.name,
                            id: ticketDetail._id,
                            price: ticketDetail.price,
                        }));
                    }}
                >
                    <Image style={{height: 28, width: 28, marginRight: 10, }} source= {require('../../assets/icons/minus/minus.png')}/>
                </TouchableOpacity>

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}
                >{ticketQuantity}</Text>

                <TouchableOpacity
                    onPress={() => {
                        setTicketQuantity(ticketQuantity + 1);
                        dispatch(addToCart({
                            name: ticketDetail.name,
                            id: ticketDetail._id,
                            price: ticketDetail.price,
                        }));
                    }}  
                >
                    <Image style={{height: 28, width: 28, marginLeft: 10, }} source= {require('../../assets/icons/plus/plus.png')}/>
                </TouchableOpacity>
            </View>
        </View>
      }
    </View>
  )
}

export default TicketTypeCard

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'pink',
        marginBottom: 10,
    },

    ticketName: {
        //backgroundColor: 'pink',
        padding: 5,
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
    },

    ticketDetail: {
        //backgroundColor: 'green',
        padding: 5,
        flexDirection: 'row',
    },

    option: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})