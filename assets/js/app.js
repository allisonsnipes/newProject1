//code for login button pressed to do geo locate
document.querySelector("#container").addEventListener("click", function(event) {
  if(event.target.tagName == "BUTTON")
}

// the geolocating API from MDN geolocate --getcurrentposition method with the parameter of position
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

//Google API start by declare the variables
var map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 15
  });

infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('Missed person last Address');
    infoWindow.open(map);
    map.setCenter(pos);
  }, function () {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
  'Error: The Geolocation service failed.' :
  'Error: Your browser doesn\'t support geolocation.');
infoWindow.open(map);
}


// Initializing Firebase for missing person
var config = {
  apiKey: "AIzaSyBrT_DAlHkM8H0XTeHW7twLnKWGaijaMTk",
  authDomain: "newproject1-5e689.firebaseapp.com",
  databaseURL: "https://newproject1-5e689.firebaseio.com",
  projectId: "newproject1-5e689",
  storageBucket: "newproject1-5e689.appspot.com",
  messagingSenderId: "380166051513"
};

firebase.initializeApp(config);

var database = firebase.database();
     
// 2. when sign up button clicks
document.querySelector("#submit").addEventListener("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var userName = document.querySelector("#nameInput").value.trim();
  var userEmail = document.querySelector("#userEmail").value.trim();
  var userCountry = document.querySelector("#userCountry").value.trim(); 
     
       // Creates local object
    var newUser = {
    name: userName,
    email: userEmail,
    country: userCountry,
       };

       // Uploads newuser data to the database
  database.ref().push(newUser);

  // Clears all the input-boxes
  document.querySelector("#userName").value = "";
  document.querySelector("#userEmail").value = "";
  document.querySelector("#userCountry").value = "";
});

// 3. Create Firebase event for adding new-user to the database
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var userName = childSnapshot.val().name;
  var userEmail = childSnapshot.val().email;
  var userCountry = childSnapshot.val().country;
}

// // declare the variables
// var map, infoWindow;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {
//       lat: -34.397,
//       lng: 150.644
//     },
//     zoom: 15
//   });
//   infoWindow = new google.maps.InfoWindow;

//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };

//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Missed person last Address');
//       infoWindow.open(map);
//       map.setCenter(pos);
//     }, function () {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//     'Error: The Geolocation service failed.' :
//     'Error: Your browser doesn\'t support geolocation.');
//   infoWindow.open(map);
// }