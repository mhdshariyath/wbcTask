import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBi6e3wqVIW6IcC1909JVMMyzFm8UV-LyI",
    authDomain: "react-native-18cb1.firebaseapp.com",
    databaseURL: "https://react-native-18cb1.firebaseio.com",
    projectId: "react-native-18cb1",
    storageBucket: "react-native-18cb1.appspot.com",
    messagingSenderId: "309977783710",
    appId: "1:309977783710:web:4adbe3e0e519e7605d0a8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;