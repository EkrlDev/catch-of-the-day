import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyAcAcUFwxsxR-_wsarkhkL2ylY7xyUMe9o",
        authDomain: "catch-of-the-day-2-ea688.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-2-ea688.firebaseio.com"
      
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;