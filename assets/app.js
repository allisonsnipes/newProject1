//code for login button pressed to do geo locate
document.querySelector("#container").addEventListener("click", function(event) {
  if(event.target.tagName == "BUTTON")
}

// the geolocating MDN API
//getcurrentposition method with the parameter of position
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

//using open street map to get location from latitude and longitude

