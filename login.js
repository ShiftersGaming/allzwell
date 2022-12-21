const firebaseConfig = {
    apiKey: "AIzaSyBnTLVzm-s--RblzO3xMRjw2C3eE6JnHZk",
    authDomain: "fir-login-d4e25.firebaseapp.com",
    databaseURL: "https://fir-login-d4e25-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-login-d4e25",
    storageBucket: "fir-login-d4e25.appspot.com",
    messagingSenderId: "441083361488",
    appId: "1:441083361488:web:3827a84aecbbf717dc46d5",
    measurementId: "G-XTKZH36XKT"
  };

   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();
   
   // Sign up function
   const signUp = () => {
       const email = document.getElementById("email").value;
       const password = document.getElementById("password").value;
       console.log(email, password)
       // firebase code
       firebase.auth().createUserWithEmailAndPassword(email, password)
           .then((result) => {
               // Signed in 
               document.write("You are Signed Up")
               console.log(result)
               // ...
           })
           .catch((error) => {
               console.log(error.code);
               console.log(error.message)
               // ..
           });
   }
   
   // Sign In function
   const signIn = () => {
       const email = document.getElementById("email").value;
       const password = document.getElementById("password").value;
       // firebase code
       firebase.auth().signInWithEmailAndPassword(email, password)
           .then((result) => {
               // Signed in 
               document.write("You are Signed In")
               console.log(result)
           })
           .catch((error) => {
               console.log(error.code);
               console.log(error.message)
           });
   }