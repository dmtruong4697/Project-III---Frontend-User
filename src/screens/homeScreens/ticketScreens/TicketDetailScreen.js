import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BackendUrl } from '../../../constants/BackendUrl';
import { AppColor } from '../../../constants/AppColor';
import QRCode from 'react-native-qrcode-svg';

const TicketDetailScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentTicket = useSelector((state) => state.ticket.currentTicket);

  const [currentPublisher, setCurrentPublisher] = useState({});
  //const backend = 'http://192.168.1.152:3000/api';

  const getPublisherDetail = async () => {
    try {
      const response = await axios.post(`${BackendUrl.backendUrl}/publisher-profile`,
      {
          id: currentTicket.publisherId,
      }
      );

        const publisher = response.data.publisher;
        return publisher;

    } catch (error) {
      console.error("Error during get:", error.response.data);
    }
};

useEffect(() => {
  getPublisherDetail()
    .then(publisher => {
      setCurrentPublisher(publisher);
    });
    //console.log(currentPublisher);

}, []);

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
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          marginTop: 20,
        }}
      >{currentPublisher.userName}</Text>

      <Text
        style={{
          fontSize: 20,
          marginTop: 5,
          fontWeight: 'bold',
          color: AppColor.themeColor,
        }}
      >{currentTicket.eventName}</Text>

      <Text
        style={{
          fontSize: 18,
          marginTop: 5,
          //fontWeight: 'bold',
          //color: AppColor.themeColor,
        }}
      >{currentTicket.name}</Text>

      <Text
        style={{
          fontSize: 18,
          marginTop: 5,
          //fontWeight: 'bold',
          //color: AppColor.themeColor,
        }}
      >Giá vé: {" "}
        {
            new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND'
            }).format(currentTicket.price)
        }
      </Text>

      <Text
        style={{
          fontSize: 18,
          marginTop: 5,
          fontWeight: 'bold',
          marginBottom: 20,
          //color: AppColor.themeColor,
        }}
      >Thời gian: {chuyenDoiDinhDangThoiGian(currentTicket.startTime)}</Text>

      <QRCode
        value={currentTicket.id}
        size={250}
      />

      <Text
        style={{
          fontSize: 18,
          marginTop: 20,
          //fontWeight: 'bold',
          //color: AppColor.themeColor,
        }}
      >ID: {currentTicket.id}</Text>

      <Text
        style={{
          fontSize: 18,
          marginTop: 20,
          //fontWeight: 'bold',
          //color: AppColor.themeColor,
        }}
      >Status: AVAILABLE</Text>
    </View>
  )
}

export default TicketDetailScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
})