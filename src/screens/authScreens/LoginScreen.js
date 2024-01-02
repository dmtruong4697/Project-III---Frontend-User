import { Image, Pressable, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Layout, Text, Input, Icon } from '@ui-kitten/components';
import { AppColor } from '../../constants/AppColor';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/actions/auth.action';
const LoginScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);

  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [secureEntry, setSecureEntry] = useState(true);

  useEffect(() => {
    if (currentUser && currentUser.token != undefined) {
      navigation.navigate({name:'Home'});
    } 
  }, [currentUser, navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topImage}>
        <Text category='h1' style={{color: 'white'}}>welcome !</Text>
      </View>

      {/* illustration */}
      <View>
        <Image 
          style={{
            alignSelf: 'center',
            height: 200,
            width: 200,
            marginTop: 20,
            marginBottom: 20
          }}
          source={require('../../../assets/images/ticket.png')}
        />
      </View>
      
      {/* 2 truong input */}
      <View style={styles.inputField}>
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
      </View>
      {/* group: nho mat khau, quen mat khau */}
      <View style={styles.passwordOption}>
          <TouchableOpacity 
            style={{
              //backgroundColor: 'pink',
            }}
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
          >
            <Text style={{color: AppColor.themeColor, fontSize: 14, fontWeight: 'bold'}}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>

      {/* nut submit */}
      <View >
        <Button
          style={{
            backgroundColor: AppColor.themeColor,
            borderWidth: 0,
            width: 300,
          }}
          onPress={() => {
            dispatch(loginRequest(email, password));
            console.log(email);
          }}
        >LOG IN</Button>

        <Text>{errorMessage}</Text>
      </View>

      {/* nut tao tai khoan */}
      <View style={styles.createAccount}>
          <Text style={{color: AppColor.grayColor, fontWeight: 'bold'}}>Don't have account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={{color: AppColor.themeColor, fontWeight: 'bold'}}>create a new account</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%'
  },

  topImage: {
    height: 50,
    width: '100%',
    backgroundColor: AppColor.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  inputField: {
    width: '90%',
    height: 100,
    padding: 0,
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'pink'
  },

  passwordOption: {
    marginBottom: 40,
    width: '90%',
    paddingLeft: 10,
  },

  createAccount: {
    width: 'auto',
    //backgroundColor: 'pink',
    flexDirection: 'row',
    top: 110,
  },
})