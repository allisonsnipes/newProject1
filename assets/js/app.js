//code for login button pressed to do geo locate
document.querySelector("#container").addEventListener("click", function(event) {
  if(event.target.tagName == "BUTTON")
}

// the geolocating API
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
// grab the latitude and longitude from the user
//add event listner to the button to be clicked 
document.querySelector("#clickMe").addEventListener("click",function(event){
  event.preventDefault();
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
var latitude,longitude;

function success(pos) {
  var crd = pos.coords;
  latitude = crd.latitude;
  longitude = crd.longitude;

  console.log('Your current position is:');
  console.log(`Latitude : ${latitude}`);
  console.log(`Longitude: ${longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);})