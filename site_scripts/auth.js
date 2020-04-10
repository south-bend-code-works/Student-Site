window.onload=function(){
  var firebaseConfig = {
    apiKey: "AIzaSyADUTjmA1dvMbuoL1b5pb_5JKdTw9Hfczc",
    authDomain: "student-site-ece7d.firebaseapp.com",
    databaseURL: "https://student-site-ece7d.firebaseio.com",
    projectId: "student-site-ece7d",
    storageBucket: "student-site-ece7d.appspot.com",
    messagingSenderId: "766705969644",
    appId: "1:766705969644:web:77270d7d33ea6534b238c9"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    let logOutButton = document.getElementById('logOut');

    logOutButton.addEventListener("click", logOut);

    if (window.location.href === "file:///D:/docs/sbcs/Student-Site/log-in.html#" || window.location.href === "file:///D:/docs/sbcs/Student-Site/log-in.html"){
      let logInButton = document.getElementById('logIn');
      logInButton.addEventListener("click", signIn);
    }
    else if (window.location.href === "file:///D:/docs/sbcs/Student-Site/sign-up.html"){
      let signUpButton = document.getElementById('signUp')
      signUpButton.addEventListener("click", signUp)
    }

    else checkAuth();

    function signIn(){
      let email = document.getElementById('username').value;
      let password = document.getElementById('password').value;

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        if(error) alert (error.message);
        else {
          window.location.href = "home.html";
          console.log('we out here')
        }
      })

    }

    function signUp(){
      let email = document.getElementById('username').value;
      let password = document.getElementById('password').value;

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        //error handling
        var errorCode = error.code;
        var errorMessage = error.message;

        if(error) alert(error.message);
        else window.location.href = "log-in.html";
      })
    }

    function logOut(){
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;

          if (error) alert(error.message);
        });
      console.log("bye")
      checkAuth();
    }

    function checkAuth(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;

          console.log(user)

          // ...
        } else {
          // User is signed out.
          window.location.href = "log-in.html";
          console.log("please log in");
          // ...
        }
      });
    }

}
