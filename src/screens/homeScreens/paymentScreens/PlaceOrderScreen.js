import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import TicketCard from '../../../components/TicketCard';
import { AppColor } from '../../../constants/AppColor';
import axios from 'axios';
import { BackendUrl } from '../../../constants/BackendUrl';

const PlaceOrderScreen = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const currentEvent = useSelector((state) => state.event.currentEvent);
    const currentUser = useSelector((state) => state.auth.currentUser);
    const totalFee = useSelector((state) => state.cart.totalFee);
    const cart = useSelector((state) => state.cart.cart);

    const buyTicket = async () => {
        try {
          const response = await axios.post(`${BackendUrl.backendUrl}/buy-ticket`,
          {
              eventId: currentEvent._id,
              cart: cart,
          },
          {
            headers: {
              Authorization: currentUser.token,
            }
          });
    
          console.log(response.data);
          navigation.navigate("Success");
        } catch (error) {
          console.error("Error during purchase:", error.response.data);
          navigation.navigate("Error");
          //console.log(currentEvent.publisherId)
        }
    };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.ticketList}>
        <Text
            style={{
                fontSize: 18,
                fontWeight: 'bold',
            }}
        >Danh sách vé:</Text>

        <View>
            {cart.map((item) => 
                <TicketCard
                    ticketDetail={item}
                />
            )}
        </View>
      </ScrollView>

      <View style={styles.fee}>
        <Text 
            style={{fontSize: 16,}}
        >Giá vé: {" "}
            {
                new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                }).format(totalFee)
            }
        </Text>
        <Text
            style={{fontSize: 16,}}
        >Thuế VAT (10%): {" "}
            {
                new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                }).format(totalFee*0.1)
            }
        </Text>
        <View
            style={{
                borderTopWidth: 1,
                borderTopColor: '#cccccc',
                marginTop: 5,
                height: 55,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <Text
                style={{
                    fontSize: 18, 
                    fontWeight: 'bold', 
                    marginTop: 5,
                }}
            >Tổng cộng: {" "}
                {
                    new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND'
                    }).format(totalFee*1.1)
                }
            </Text>

            <TouchableOpacity
                style={{
                    backgroundColor: AppColor.themeColor,
                    height: '100%',
                    paddingLeft: 10,
                    paddingRight: 10,
                }}
                onPress={() => {
                    buyTicket();
                    //console.log("hehe");
                    //navigation.navigate("Error");
                }}
            >
                <Text
                    style={{
                        fontSize: 18, 
                        fontWeight: 'bold', 
                        marginTop: 5,
                        color: '#FFFFFF',
                    }}
                >Thanh Toán</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.confirm}>

      </View>
    </View>
  )
}

export default PlaceOrderScreen

const styles = StyleSheet.create({
    container: {
        //height: '100%',
        flex: 1,
        //backgroundColor: 'pink',
        //justifyContent: 'space-between',
    },

    ticketList: {
        //flex:2,
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 5,
        marginBottom: 20,
    },

    fee: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 5,
        paddingBottom: 0,
        paddingRight: 0,
    },

    confirm: {

    },
})