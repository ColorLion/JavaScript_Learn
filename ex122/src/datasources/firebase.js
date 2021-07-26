import firebase from 'firebase/app'

import 'firebase/firebase-database'
import 'firebase/storage'

const oFirebase = firebase.initialzeApp({
    databaseURL: "https://molendamiro-default-rtdb.firebaseio.com",
    storageBucket: "molendamiro.appspot.com",

});

const oDB = oFirebase.database();

export const oPicturesinDB = oDB.ref('pictures');
export const oStorage = oFirebase.storage();