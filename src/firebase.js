import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB-IAg499b0RwvZJwCGeB2SSaxAlFO9zaI",
  authDomain: "goalcoach-5a0dd.firebaseapp.com",
  databaseURL: "https://goalcoach-5a0dd.firebaseio.com",
  projectId: "goalcoach-5a0dd",
  storageBucket: "",
  messagingSenderId: "292799560810"
};

export const firebaseApp = firebase.initializeApp(config);