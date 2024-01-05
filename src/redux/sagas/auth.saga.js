import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { loginFailure, loginSuccess } from '../actions/auth.action';
import { useNavigate } from 'react-router-dom';
import { BackendUrl } from '../../constants/BackendUrl';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const backend = 'http://192.168.1.152:3000/api';

function* login(action) {
    //const navigate = useNavigate();
  try {
    const { email, password } = action.payload;
    const response = yield call(axios.post, `${BackendUrl.backendUrl}/user-login`, {
      email,
      password,
    });

    if (response.status === 200) {
      const currentUser = {
        token: response.data.token,
        id: response.data.id,
        userName: response.data.userName,
        email: response.data.email,
        role: response.data.role,
      };

      yield put(loginSuccess(currentUser));
      console.log(response.data);
      //AsyncStorage.setItem('token', currentUser.token);
      //navigate("/home");
    } else {
      // Handle other status codes if needed
    }
  } catch (error) {
    console.error('Error during login:', error.response.data);

    yield put(loginFailure(error.response.data.message));
  }
}

function* authSaga() {
  yield takeLatest('LOGIN_REQUEST', login);
}

export default authSaga;
