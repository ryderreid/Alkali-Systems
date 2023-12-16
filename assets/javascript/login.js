var firebaseConfig = {
  apiKey: "AIzaSyDBZ2M-Fi4rd_Id5p1CQUuld0nDfPU79sU",
  authDomain: "alkali-systems.firebaseapp.com",
  projectId: "alkali-systems",
  storageBucket: "alkali-systems.appspot.com",
  messagingSenderId: "93698703749",
  appId: "1:93698703749:web:0d32fd3364c5e9d1e184ec",
  measurementId: "G-3MK73RHMTR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Function to show the account disabled banner
function showAccountDisabledBanner() {
  var banner = document.getElementById('accountDisabledBanner');
  banner.style.display = 'block';

  // Hide the banner after 10 seconds
  setTimeout(function () {
    hideAccountDisabledBanner();
  }, 5000);
}

// Function to hide the account disabled banner
function hideAccountDisabledBanner() {
  document.getElementById('accountDisabledBanner').style.display = 'none';
}

function showAccountInfoBanner() {
  var banner = document.getElementById('accountInfoBanner');
  banner.style.display = 'block';

  // Hide the banner after 10 seconds
  setTimeout(function () {
    hideAccountInfoBanner();
  }, 5000);
}

function hideAccountInfoBanner() {
  document.getElementById('accountInfoBanner').style.display = 'none';
}


let signInButton = document.getElementById('login');
signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  auth.signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("user", user.email);
      hideAccountDisabledBanner();
      hideAccountInfoBanner(); // Hide the banner on successful login
      window.location = "/testing/dashboard.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === "auth/user-disabled") {
        // Account is disabled
        showAccountDisabledBanner(); // Show the banner for a disabled account
      } else if (errorCode === "auth/invalid-credential") {
        showAccountInfoBanner(); // Show the banner for wrong account info
      } else {
        // Other errors
        alert(errorMessage);
      }
    });
});



// Auth state change listener
auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    var users = document.getElementById("user");
    var text = document.createTextNode(email);
    users.appendChild(text);
    console.log(users);
  } else {
    // No user signed in
  }
});

//let signOutButton = document.getElementById("logout");
//signOutButton.addEventListener("click", (e) => {
 // e.preventDefault();
 // console.log("clicked");

 // auth.signOut();
 // alert("Logged Off");
 // window.location = "/testing/login.html";
//});

function ForgotPassword() {
  alert("Please contact your administrator to reset your password");
}
