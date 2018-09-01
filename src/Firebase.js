import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBLJhyYQzsKSXJ1Rl5rYPfCxq9LSSf9Dmk",
    authDomain: "liste-3df9a.firebaseapp.com",
    databaseURL: "https://liste-3df9a.firebaseio.com",
    projectId: "liste-3df9a",
    storageBucket: "liste-3df9a.appspot.com",
    messagingSenderId: "863322520447"
  };
  firebase.initializeApp(config);


//const muss ich zur funktion setzen, sonst gehts nicht, hier wird die firebase.auth() Funktion ausgeführt
//dieserFunktion werden die Parapemter email &Passwort übergeben.
//
 export function sendDataFunktionPut (essen, adresse) {
 
    fetch('https://liste-3df9a.firebaseio.com/liste.json', {

        method: 'PUT',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            essen: essen, 
            adresse: adresse,
          }),

    })

    .then(response => response.json())
    .then(json => console.log(json))

    
    
}