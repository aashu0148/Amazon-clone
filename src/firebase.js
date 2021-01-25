import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyC9LUN1-EcwfbODAx1ZbsPDGJtZevdnuEc",
    authDomain: "clone01-da3d3.firebaseapp.com",
    projectId: "clone01-da3d3",
    storageBucket: "clone01-da3d3.appspot.com",
    messagingSenderId: "746440004490",
    appId: "1:746440004490:web:c97e3d23e6719d4f57ee73",
    measurementId: "G-8WH60BVB28"
})

export const auth = firebase.auth()
