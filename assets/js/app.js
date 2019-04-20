// MDN GEOLOCATION API: HTML5 geolocation.

//starts when user clicks within the container
document.querySelector(".container").addEventListener("click", function(event) {
  if(event.target.tagName == "BUTTON");
});

// getscurrentposition method with the parameter of position
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
    var map = new google.maps.Map(document.getElementById("map"), {
         zoom: 12,
         center: new google.maps.LatLng(55.755327, 37.622166),
         mapTypeId: google.maps.MapTypeId.ROADMAP
      });

    google.maps.event.addListenerOnce(map, 'idle', function() {
      alert(this.getBounds());
    });
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // error handler if the browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  // infoWindow.setPosition(pos);
  // infoWindow.setContent(browserHasGeolocation ?
  //   'Error: The Geolocation service failed.' :
  //   'Error: Your browser doesn\'t support geolocation.');
  // infoWindow.open(map);
}

//Google API: start by declaring the variables
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

// FIREBASE: initializing Firebase for missing person
var config = {
  apiKey: "AIzaSyBrT_DAlHkM8H0XTeHW7twLnKWGaijaMTk",
  authDomain: "newproject1-5e689.firebaseapp.com",
  databaseURL: "https://newproject1-5e689.firebaseio.com",
  projectId: "newproject1-5e689",
  storageBucket: "newproject1-5e689.appspot.com",
  messagingSenderId: "380166051513"
};

firebase.initializeApp(config);
// Clears all the input-boxes
var userName = "";
var userEmail = "";
var userCountry = "";
var userEvent = "";
// var database = firebase.database();
     
// 2. when sign up button clicks
document.querySelector("#addUser").addEventListener("click", function (event) {
  event.preventDefault();

  // Grabs user values enter by elements
  var userName = document.querySelector("#nameInput").value.trim();
  var userEmail = document.querySelector("#emailInput").value.trim();
  var userCountry = document.querySelector("#countySelection").value.trim();
  var userEvent = document.querySelector("#commentInput").value.trim();
  
  //push variables created to firebase
  database.database.ref().push({
    //here we set the variables to the specific key to create key/value pairs
    name:userName,
    email:userEmail,
    country:userCountry,
    events:userEvent,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  })
  // Uploads newuser data to the database
  })
   
  
});

database.ref().on("child_added", function(snapshot) {
  document.querySelector(".well").append(<p> +snapshot.val());
  // document.querySelector(".well").append(<p> + snapshot.val().country+ <p>);
  // document.querySelector(".well").append(<p> + snapshot.val().events+ "<p>");
  // document.querySelector(".well").append("<p>" + snapshot.val().dateAdded+ "<p>");
  // document.querySelector(".well").append("<hr>");

})
// 3. Create Firebase event for adding new-user to the database
database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(childSnapshot) {

  document.querySelector("#nameDisplay").innerHTML= snapshot.val().name;
  document.querySelector("#emailDisplay").innerHTML = snapshot.val().email;
  document.querySelector("#countryDisplay").innerHTML = snapshot.val().country;
  document.querySelector("#alertDisplay").innerHTML = snapshot.val().events;
  })
}