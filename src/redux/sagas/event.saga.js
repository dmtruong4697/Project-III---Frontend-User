// import { takeLatest, call, put } from 'redux-saga/effects';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import { BackendUrl } from '../../constants/BackendUrl';
// import { useEffect } from 'react';
// //import AsyncStorage from '@react-native-async-storage/async-storage';

// const backend = BackendUrl.backendUrl;

// const getAllEvent = async () => {
//     try {
//       const response = await axios.get(backend + "/all-event", 
//       {
//         headers: {
//           Authorization: currentUser = useSelector((state) => state.auth.currentUser).token,
//         }
//       }
//       );

//       if (response.status === 200) {
//         const events = response.data.events;
//         return events;
//       } else {
        
//       }
//     } catch (error) {
//       console.error("Error during get:", error);
//     }
// };

// export {getAllEvent};
  
