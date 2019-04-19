//code for login button pressed to do geo locate
document.querySelector("#container").addEventListener("click", function(event) {
  if(event.target.tagName == "BUTTON")
}

// the geolocating API from MDN geolocat --getcurrentposition method with the parameter of position
navigator.geolocation.getCurrentPosition(function(position) {
  //the do something function will execute when the location is obtained
  //defining instrustions based on the property of the coordinates of long and lat
  do_something(position.coords.latitude, position.coords.longitude);
});

//updating current position if the position changes or if more accurate info comes
//use a callback function to update position information done with watchPosition function
var watchID = navigator.geolocation.watchPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});

//stop watching users
navigator.geolocation.clearWatch(watchID);

//handling errors and giving an alert message
function errorCallback(error) {
  alert('ERROR(' + error.code + '): ' + error.message);
};

//solomon new code


 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyAJgisdK-RAywXzezF79hrTj5wQykJ9rek",
   authDomain: "team2-48c79.firebaseapp.com",
   databaseURL: "https://team2-48c79.firebaseio.com",
   projectId: "team2-48c79",
   storageBucket: "",
   messagingSenderId: "142646288799"
 };
 firebase.initializeApp(config);

     
      var database = firebase.database();
     
      // 2. when sign up button clicks
      document.querySelector("#submit").addEventListener("click", function(event) {
       event.preventDefault();
     
       // Grabs user input
       var userName = document.querySelector("#userName").value.trim();
       var userEmail = document.querySelector("#userEmail").value.trim();
       var userCountry = document.querySelector("#userCountry").value.trim(); 
       var userEmergencyNum1 = document.querySelector("#emergencyNum1").value.trim();
       var userEmergencyNum2 = document.querySelector("#emergencyNum2").value.trim();
       var userEmergencyNum3 = document.querySelector("#emergencyNum3").value.trim(); 
     
       // Creates local object
       var newUser = {
    name: userName,
    email: userEmail,
    country: userCountry,
    contact1: useremErgencyNum1,
    contact2: userEmergencyNum2,
    contact3: userEmergencyNum3,
       };

       // Uploads newuser data to the database
  database.ref().push(newUser);

  // Clears all the input-boxes
  document.querySelector("#userName").value = "";
  document.querySelector("#userEmail").value = "";
  document.querySelector("#userCountry").value = "";
  document.querySelector("#emergencyNum1").value = "";
  document.querySelector("#emergencyNum2").value = "";
  document.querySelector("#emergencyNum3").value = "";
});

// 3. Create Firebase event for adding new-user to the database
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var userName = childSnapshot.val().name;
  var userEmail = childSnapshot.val().email;
  var userCountry = childSnapshot.val().country;
  var usercontact1 = childSnapshot.val().contact1;
  var usercontact2 = childSnapshot.val().contact2;
  var usercontact3 = childSnapshot.val().contact3;

  

  
}

  



     
     </script>

