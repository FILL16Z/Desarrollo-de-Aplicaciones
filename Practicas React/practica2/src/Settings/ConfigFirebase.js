import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyAMPRY3do37difnyC9NbRSE18Pw3e2VfOc",
    authDomain: "react-c3647.firebaseapp.com",
    databaseURL: "https://react-c3647.firebaseio.com",
    projectId: "react-c3647",
    storageBucket: "react-c3647.appspot.com",
    messagingSenderId: "986075036916",
    appId: "1:986075036916:web:9761f93731147d627332a1",
    measurementId: "G-YMN2C68NW9"

}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;