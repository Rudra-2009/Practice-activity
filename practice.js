// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD4h9xse_-pxRMA05I_Pr1rgasiL5B-nZE",
    authDomain: "practice-class-database.firebaseapp.com",
    databaseURL: "https://practice-class-database-default-rtdb.firebaseio.com",
    projectId: "practice-class-database",
    storageBucket: "practice-class-database.appspot.com",
    messagingSenderId: "827228839756",
    appId: "1:827228839756:web:9388b3a7d2b3e09601f9e9"
  };
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }