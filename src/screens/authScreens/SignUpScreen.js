import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { AppColor } from '../../constants/AppColor'
import { useNavigation } from '@react-navigation/native'
import { Button, Layout, Text, Input, Icon } from '@ui-kitten/components';
import axios from 'axios';
import { BackendUrl } from '../../constants/BackendUrl';

const SignUpScreen = () => {

  const navigation = useNavigation();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isFocusUserName, setIsFocusUserName] = useState('');
  const [isFocusEmail, setIsFocusEmail] = useState('');
  const [isFocusPhoneNumber, setIsFocusPhoneNumber] = useState('');
  const [isFocusPassword, setIsFocusPassword] = useState('');
  const [isFocusConfirmPassword, setIsFocusConfirmPassword] = useState('');

  const [secureEntry, setSecureEntry] = useState(true);
  const [secureConfirmEntry, setSecureConfirmEntry] = useState(true);

  const signUp = async () => {
    try {
      const response = await axios.post(`${BackendUrl.backendUrl}/user-signup`,
      {
        userName: userName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        avaterImage: "example.com",
      }
      );

      if (response.status == 201) {
        console.log(response.data.message);
        navigation.navigate("Login");
      } 
    } catch (error) {
      console.error("Error during signup:", error.response);
    }
};
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* nut back */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={{width: 40, marginLeft: 10}}
          onPress={() => {navigation.navigate("Login")}}
        >
          <Image style={{height: 30, width: 40,}} source={require('../../../assets/icons/back/back.png')}/>
        </TouchableOpacity>
      </View>

      {/* title */}
      <View style={styles.title}>
        <Text style={{fontSize: 28, fontWeight: 'bold',}}>CREATE ACCOUNT</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: AppColor.grayColor}}>Create a new account</Text>
      </View>

      {/* input form */}
      <View style={styles.inputForm}>
        {/* user name */}
        <Input
          size='large'
          value={userName}
          keyboardType='default'
          placeholder= {isFocusUserName? '':'USER NAME'}
          //icon user
          accessoryLeft={() => {
            return(              
            <View>
              {(isFocusUserName || (userName != '')) && <Image style={{height: 20, width: 20, }} source= {require('../../../assets/icons/user/user-on.png')}/>}
              {(!isFocusUserName && (userName == '')) && <Image style={{height: 20, width: 20, }} source= {require('../../../assets/icons/user/user-off.png')}/>}
            </View>
            )
          }}
          //nut clear field
          accessoryRight={() => {
            return(              
            <TouchableOpacity
              onPress={() => {setUserName('')}}
            >
              {(userName !== '')&&<Image style={{height: 18, width: 18, }} source= {require('../../../assets/icons/cancel/cancel.png')}/>}
            </TouchableOpacity>
            )
          }}
          style={{
            borderRadius: 5,
            borderWidth: 0,
            backgroundColor: null,
            shadowColor: AppColor.themeColor,
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: isFocusUserName? 2: 0,
          }}
          placeholderTextColor={AppColor.grayColor}
          textStyle={{color: AppColor.themeColor, fontWeight: 'bold'}}
          onFocus={() => {setIsFocusUserName(true)}}
          onBlur={() => {setIsFocusUserName(false)}}
          onChangeText={(text) => {setUserName(text)}}
        />

        {/* email */}
        <Input
          size='large'
          value={email}
          keyboardType='email-address'
          placeholder= {isFocusEmail? '':'EMAIL'}
          //icon email
          accessoryLeft={() => {
            return(              
            <View>
              {(isFocusEmail || (email != '')) && <Image style={{height: 20, width: 20, }} source= {require('../../../assets/icons/email/email-on.png')}/>}
              {(!isFocusEmail && (email == '')) && <Image style={{height: 20, width: 20, }} source= {require('../../../assets/icons/email/email-off.png')}/>}
            </View>
            )
          }}
          //nut clear field
          accessoryRight={() => {
            return(              
            <TouchableOpacity
              onPress={() => {setEmail('')}}
            >
              {(email !== '')&&<Image style={{height: 18, width: 18, }} source= {require('../../../assets/icons/cancel/cancel.png')}/>}
            </TouchableOpacity>
            )
          }}
          style={{
            borderRadius: 5,
            borderWidth: 0,
            backgroundColor: null,
            shadowColor: AppColor.themeColor,
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: isFocusEmail? 2: 0,
          }}
          placeholderTextColor={AppColor.grayColor}
          textStyle={{color: AppColor.themeColor, fontWeight: 'bold'}}
          onFocus={() => {setIsFocusEmail(true)}}
          onBlur={() => {setIsFocusEmail(false)}}
          onChangeText={(text) => {setEmail(text)}}
        />

        {/* phone number */}
        <Input
          size='large'
          value={phoneNumber}
          keyboardType='number-pad'
          placeholder= {isFocusPhoneNumber? '':'PHONE NUMBER'}
          //icon user
          accessoryLeft={() => {
            return(              
            <View>
              {(isFocusPhoneNumber || (phoneNumber != '')) && <Image style={{height: 20, width: 20, }} source= {require('../../../assets/icons/phone/phone-on.png')}/>}
              {(!isFocusPhoneNumber && (phoneNumber == '')) && <Image style={{height: 20, width: 20, }} source= {require('../../../assets/icons/phone/phone-off.png')}/>}
            </View>
            )
          }}
          //nut clear field
          accessoryRight={() => {
            return(              
            <TouchableOpacity
              onPress={() => {setPhoneNumber('')}}
            >
              {(phoneNumber !== '')&&<Image style={{height: 18, width: 18, }} source= {require('../../../assets/icons/cancel/cancel.png')}/>}
            </TouchableOpacity>
            )
          }}
          style={{
            borderRadius: 5,
            borderWidth: 0,
            backgroundColor: null,
            shadowColor: AppColor.themeColor,
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: isFocusPhoneNumber? 2: 0,
          }}
          placeholderTextColor={AppColor.grayColor}
          textStyle={{color: AppColor.themeColor, fontWeight: 'bold'}}
          onFocus={() => {setIsFocusPhoneNumber(true)}}
          onBlur={() => {setIsFocusPhoneNumber(false)}}
          onChangeText={(text) => {setPhoneNumber(text)}}
        />

        {/* password */}
        <Input
          size='large'
          value={password}
          placeholder={isFocusPassword? '':'PASSWORD'}
          //icon password
          accessoryLeft={() => {
            return(              
            <View>
              {(isFocusPassword || (password != '')) && <Image style={{height: 20, width: 20, }} source= {require('../../../assets/icons/password/password-on.png')}/>}
              {(!isFocusPassword && (password == '')) && <Image style={{height: 20, width: 20, }} source= {require('../../../assets/icons/password/password-off.png')}/>}
            </View>
            )
          }}
          //nut an/hien mat khau
          accessoryRight={() => {
            return(
              <TouchableOpacity
                onPress={() => {setSecureEntry(!secureEntry)}}
              >
                {(password !== '') && <Image style={{height: 18, width: 18, }} source= {secureEntry? require('../../../assets/icons/eye/eye.png'):require('../../../assets/icons/eye/eye-off.png') } />}
              </TouchableOpacity>
            )
          }}
          style={{
            borderRadius: 5,
            borderWidth: 0,
            backgroundColor: null,
            //borderBottomWidth: 2,
            //borderColor: isFocusPassword? AppColor.themeColor: AppColor.themeColor1,
            shadowColor: AppColor.themeColor,
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: isFocusPassword? 2: 0,
          }}
          placeholderTextColor={AppColor.grayColor}
          textStyle={{color: AppColor.themeColor, fontWeight: 'bold'}}
          onFocus={() => {setIsFocusPassword(true)}}
          onBlur={() => {setIsFocusPassword(false)}}
          secureTextEntry={secureEntry}
          onChangeText={(text) => {setPassword(text)}}
        />

        {/* confirm password */}
        <Input
          size='large'
          value={confirmPassword}
          placeholder={isFocusConfirmPassword? '':'CONFIRM PASSWORD'}
          //icon password
          accessoryLeft={() => {
            return(              
            <View>
              {(isFocusConfirmPassword || (confirmPassword != '')) && <Image style={{height: 20, width: 20, }} source= {require('../../../assets/icons/password/password-on.png')}/>}
              {(!isFocusConfirmPassword && (confirmPassword == '')) && <Image style={{height: 20, width: 20, }} source= {require('../../../assets/icons/password/password-off.png')}/>}
            </View>
            )
          }}
          //nut an/hien mat khau
          accessoryRight={() => {
            return(
              <TouchableOpacity
                onPress={() => {setSecureConfirmEntry(!secureConfirmEntry)}}
              >
                {(confirmPassword !== '') && <Image style={{height: 18, width: 18, }} source= {secureConfirmEntry? require('../../../assets/icons/eye/eye.png'):require('../../../assets/icons/eye/eye-off.png') } />}
              </TouchableOpacity>
            )
          }}
          style={{
            borderRadius: 5,
            borderWidth: 0,
            backgroundColor: null,
            //borderBottomWidth: 2,
            //borderColor: isFocusPassword? AppColor.themeColor: AppColor.themeColor1,
            shadowColor: AppColor.themeColor,
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: isFocusConfirmPassword? 2: 0,
          }}
          placeholderTextColor={AppColor.grayColor}
          textStyle={{color: AppColor.themeColor, fontWeight: 'bold'}}
          onFocus={() => {setIsFocusConfirmPassword(true)}}
          onBlur={() => {setIsFocusConfirmPassword(false)}}
          secureTextEntry={secureConfirmEntry}
          onChangeText={(text) => {setConfirmPassword(text)}}
        />
      </View>

      {/* nut submit */}
      <View style={styles.buttonView}>
        <Button
            style={{
              backgroundColor: AppColor.themeColor,
              borderWidth: 0,
              width: 300,
              marginTop: 40,
            }}
            onPress={() => {
              signUp();
            }}
          >CREATE ACCOUNT</Button>
      </View>

      {/* nut back to dang nhap */}
      <View style={styles.logIn}>
          <Text style={{color: AppColor.grayColor, fontWeight: 'bold'}}>Already have a account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{color: AppColor.themeColor, fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%'
  },

  header: {
    //height: 50,
    width: '100%',
    marginTop: 15,
    //backgroundColor: 'red'
  },

  title: {
    //backgroundColor: 'pink',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },

  inputForm: {
    width: '90%',
    height: 320,
    padding: 0,
    marginTop: 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'yellow'
  },

  buttonView: {

  },

  logIn: {
    width: 'auto',
    //backgroundColor: 'pink',
    flexDirection: 'row',
    top: 100,
  },
})