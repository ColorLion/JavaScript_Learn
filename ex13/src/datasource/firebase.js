import firebase from 'firebase/app'

const oFirebase = firebase.initializeApp({
    apiKey: "AIzaSyBYw1sW-f_fR2I1ZOmUphaW4RmOS1UJ9-0",
    authDomain: "molendamiro.firebaseapp.com",
});

export const oFirebaseAuth = oFirebase.auth();