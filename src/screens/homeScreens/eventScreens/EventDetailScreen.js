import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppColor } from '../../../constants/AppColor'
import { useDispatch, useSelector } from 'react-redux';
import TicketTypeCard from '../../../components/TicketTypeCard';
import { BackendUrl } from '../../../constants/BackendUrl';
import axios from 'axios';
import { resetCart } from '../../../redux/actions/cart.action';
import { useNavigation } from '@react-navigation/native';

const EventDetailScreen = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const currentEvent = useSelector((state) => state.event.currentEvent);
    const totalFee = useSelector((state) => state.cart.totalFee);
    const [currentPublisher, setCurrentPublisher] = useState({});
    //const backend = 'http://192.168.1.152:3000/api';

    const getPublisherDetail = async () => {
      try {
        const response = await axios.post(`${BackendUrl.backendUrl}/publisher-profile`,
        {
            id: currentEvent.publisherId,
        }
        );
  
        //if (response.status == 200) {
          const publisher = response.data.publisher;
          return publisher;
        //} else {
          
        //}
      } catch (error) {
        console.error("Error during get:", error.response.data);
        //console.log(currentEvent.publisherId)
      }
  };

  useEffect(() => {
    getPublisherDetail()
      .then(publisher => {
        setCurrentPublisher(publisher);
        //console.log(publisher);
      });

    return() => {
        dispatch(resetCart());
        console.log("out");
    }
  }, []);

  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.coverImage}>

            </View>

            <View style={styles.content}>
                <View style={styles.eventName}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>{currentEvent.name}</Text>
                </View>

                <View style={styles.time}>
                    <Image style={{height: 28, width: 28, marginRight: 10, }} source= {require('../../../../assets/icons/clock/clock.png')}/>
                    <Text
                        style={{
                            fontSize: 16,
                        }}
                    >{currentEvent.startTime}</Text>
                </View>

                <View style={styles.location}>
                    <Image style={{height: 28, width: 28, marginRight: 10, }} source= {require('../../../../assets/icons/location/location.png')}/>
                    <Text
                        style={{
                            fontSize: 16,
                        }}
                    >{currentEvent.location}</Text>
                </View>
            </View>

            <View style={styles.description}>
                <View style={styles.location}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}
                    >GIỚI THIỆU</Text>
                </View>

                <Text
                    style={{
                        fontSize: 16,
                        padding: 10,
                    }}
                >{currentEvent.description}</Text>
            </View>

            <View style={styles.ticket}>
                <View style={styles.location}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}
                    >THÔNG TIN VÉ</Text>
                </View>

                <View style={styles.ticketList}>
                    {currentEvent.tickets.map((item) => <TicketTypeCard ticketDetail={item}/>)}
                </View>
            </View>

            <View style={styles.publisherDetail}>
                <View style={styles.location}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}
                    >NHÀ TỔ CHỨC</Text>
                </View>

                {/* ten nha to chuc */}
                <Text
                    style={{
                        fontSize: 17,
                        padding: 10,
                        fontWeight: '600',
                    }}
                >{currentPublisher.userName}</Text>

                {/* gioi thieu nha to chuc */}
                <Text
                    style={{
                        fontSize: 16,
                        padding: 10,
                    }}
                >{currentPublisher.description}</Text>
            </View>
        </ScrollView>

        <View style={styles.placeOrder}>
            <Text
                style={{
                    color: '#ffffff',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 10,
                }}
            >Tổng: {
                new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                  }).format(totalFee)
            }</Text>
            <TouchableOpacity
                style={{
                    backgroundColor: '#13855b',
                    width: 100,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                }}
                onPress={() => {
                    navigation.navigate("PlaceOrder");
                }}
            >
                <Text
                    style={{
                        color: '#ffffff',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}
                >Thanh Toán</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default EventDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    coverImage: {
        width: '100%',
        height: 130,
        //backgroundColor: 'pink',
    },

    content: {
        width: '100%',
        marginBottom: 15,
        backgroundColor: 'white',
    },

    eventName: {
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30,
    },

    time: {
        padding: 10,
        flexDirection: 'row',
        marginBottom: 10,
        //justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },

    location: {
        padding: 10,
        flexDirection: 'row',
        //justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },

    description: {
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 15,
    },
    
    ticket: {
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 15,
    },

    publisherDetail: {
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 15,
    },

    placeOrder: {
        width: '100%',
        height: 50,
        padding: 10,
        backgroundColor: AppColor.themeColor,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        //marginBottom: 0,
    },

    ticketList: {
        padding: 5,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
})