/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...
var watchID = null;
        
        document.addEventListener("deviceready", function(){
            watchID = navigator.geolocation.watchPosition(function(position){
                console.log('Latitude: '          + position.coords.latitude          + '\n' +
                      'Longitude: '         + position.coords.longitude         + '\n' +
                      'Altitude: '          + position.coords.altitude          + '\n' +
                      'Accuracy: '          + position.coords.accuracy          + '\n' +
                      'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                      'Heading: '           + position.coords.heading           + '\n' +
                      'Speed: '             + position.coords.speed             + '\n' +
                      'Timestamp: '         + position.timestamp                + '\n');
            }, function(error){
                if(error.code == PositionError.PERMISSION_DENIED)
                {
                    alert("App doesn't have permission to use GPS");
                }
                else if(error.code == PositionError.POSITION_UNAVAILABLE)
                {
                    alert("No GPS device found");
                }
                else if(error.code == PositionError.TIMEOUT)
                {
                    alert("Its taking to find user location");
                }
                else
                {
                    alert("An unknown error occured");
                }
            }, { maximumAge: 3000, timeout: 30000, enableHighAccuracy: true });
        }, false);