const firebaseConfig = {
  apiKey: "AIzaSyBBJ9weAlayMFFvTMBuN_HOChJYPuB1jEw",
  authDomain: "real-time-thread-app.firebaseapp.com",
  projectId: "real-time-thread-app",
  storageBucket: "real-time-thread-app.appspot.com",
  messagingSenderId: "991717444181",
  appId: "1:991717444181:web:206453b4a012e48b41a2dc"
};



firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database   = firebase.database();


window.signUp = (event) => {
  
  event.preventDefault()

  let email = document.getElementById("emailAddress").value
  let password = document.getElementById("Password").value
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  
}

window.logIn = (event) => {
  
  event.preventDefault()
  let email = document.getElementById("emailAddress").value
  let password = document.getElementById("Password").value
  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

}
firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});