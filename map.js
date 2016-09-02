window.onload = getMyLocation;

function getMyLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation);
	} else {
		alert("Oops, no geolocation support");
	}
}

function displayLocation(){
alert("hi");
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	var div = document.getElementById("location");
	div.innerHTML = "You are at Lat " + latitude + ", Long " + longitude;
}