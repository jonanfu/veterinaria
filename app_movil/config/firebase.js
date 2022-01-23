import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

//firebase config
// const firebaseConfig = {
//     apikey: Constants.manifest.extra.apiKey,
//     authDomain: Constants.manifest.extra.authDomain,
//     projectId: Constants.manifest.extra.projectId,
//     storageBucket: Constants.manifest.extra.storageBucket,
//     messagingSenderId: "445746039202", //Constants.manifest.extra.messagingSenderId,
//     appId: Constants.manifest.extra.appId,
//     //databaseURL: Constants.manifest.extra.databaseURL
// };
//initialize

const firebaseConfig = {
    apiKey: "AIzaSyBi-QhdsSU7X2PadFRb2eQWnXZZWBOWAnU",
    authDomain: "chatapp-2e644.firebaseapp.com",
    projectId: "chatapp-2e644",
    storageBucket: "chatapp-2e644.appspot.com",
    messagingSenderId: "445746039202",
    appId: "1:445746039202:web:80ab121c52bfb6f6514afb"
};


// console.log(firebaseConfig.apikey);
// console.log(firebaseConfig.authDomain);
// console.log(firebaseConfig.projectId);
// console.log(firebaseConfig.storageBucket);
// console.log(firebaseConfig.messagingSenderId);
// console.log(firebaseConfig.appId);
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
// console.log(auth);
// console.log(database);
