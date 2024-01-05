import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCurrentEvent } from '../redux/actions/event.action';

const EventCard = (props) => {

    const {eventDetail} = props;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    function chuyenDoiDinhDangThoiGian(inputTime) {
        // Chuyển đổi chuỗi thời gian đầu vào thành đối tượng Date
        var thoiGian = new Date(inputTime);
      
        // Lấy thông tin giờ, phút, ngày, tháng và năm
        var gio = thoiGian.getUTCHours();
        var phut = thoiGian.getUTCMinutes();
        var ngay = thoiGian.getUTCDate();
        var thang = thoiGian.getUTCMonth() + 1; // Tháng bắt đầu từ 0
        var nam = thoiGian.getUTCFullYear();
      
        // Tạo chuỗi định dạng mới
        var dinhDangMoi = gio.toString().padStart(2, '0') + ':' + phut.toString().padStart(2, '0') +
            ' - ' + ngay.toString().padStart(2, '0') + '/' + thang.toString().padStart(2, '0') + '/' + nam;
      
        return dinhDangMoi;
      }

  return (
    <View 
        style={styles.container}
    >
      <View style={styles.image}>
        <Image 
            source={{uri: eventDetail.imageUrl}}
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
            dispatch(setCurrentEvent(eventDetail));
            navigation.navigate("EventDetail")
        }}
    >
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
        >{chuyenDoiDinhDangThoiGian(eventDetail.startTime)}</Text>

        <Text
            style={{
                fontSize: 13,
                fontWeight: '600',
            }}
        >{eventDetail.location}</Text>
      </TouchableOpacity>

      <View style={styles.location}>

      </View>
    </View>
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