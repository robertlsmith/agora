import firebase from "firebase/app"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyBE7YNpWABM4Az1mSn4dVmMuwkfL06O4fw",
    authDomain: "agora-93000.firebaseapp.com",
    projectId: "agora-93000",
    storageBucket: "agora-93000.appspot.com",
    messagingSenderId: "708906528022",
    appId: "1:708906528022:web:d3287fdfab8168ac3e7437",
    measurementId: "G-TLXYCGNS1L",
}

if(!firebase.apps.length) {
    firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export { firestore }