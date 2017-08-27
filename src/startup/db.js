import firebase from 'firebase';

var config = {
  // Firebase config
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
