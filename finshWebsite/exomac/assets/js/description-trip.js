// let map, directionsService, directionsRenderer;
// let sourceAutocomplete, desAutocomplete;
// const position = { lat: -25.344, lng: 131.031 };
// async function initMap() {
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: position,
//     zoom: 15,
//   });

//   google.maps.event.addListener(map, "click", function (event) {
//     this.SetOptions({ Scrollwheel: true });
//   });
//   directionsService = new google.maps.DirectionsService();
//   directionsRenderer = new google.maps.DirectionsRenderer();
//   directionsRenderer.setMap(map);
//   sourceAutocomplete = new google.maps.places.AutoComplete(
//     document.getElementById("source")
//   );
//   desAutocomplete = new google.maps.places.AutoComplete(
//     document.getElementById("destnation")
//   );
// }

// initMap();

// <!--
//   let map;
//   const position = { lat: -25.344, lng: 131.031 };
//   function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 15,
//       center: position,
//       mapId: "",
//     });
//     google.maps.event.addListener(map, "click", function (event) {
//       this.SetOptions({ Scrollwheel: true });
//     });
//   }
//  -->
// function calcRoute() {
//   var sourceLocation = document.getElementById("source").value;
//   var destnationLocation = document.getElementById("destnation").value;
//   let request = {
//     origin: sourceLocation,
//     origin: destnationLocation,
//     travelMode: "DRIVING",
//   };
//   directionsService.route(request, function (result, status) {
//     if (status == "ok") {
//       directionsRenderer.setDirections(result);
//     }
//   });
// }


    
        // function initializeMap() {
        //     // const locations = {!! $data !!};
        //     const map = new google.maps.Map(document.getElementById("map"), {
        //         zoom: 13
        //     });
        //     const bounds = new google.maps.LatLngBounds();
        //     const userLocation = new google.maps.LatLng(parseFloat(locations[0].lat_user), parseFloat(locations[0].long_user));
        //     const goingLocation = new google.maps.LatLng(parseFloat(locations[0].lat_going), parseFloat(locations[0].long_going));
        //     const userMarker = new google.maps.Marker({
        //         position: userLocation,
        //         map: map,
        //         label: 'U',
        //     });
        //     bounds.extend(userMarker.position);
        //     const goingMarker = new google.maps.Marker({
        //         position: goingLocation,
        //         map: map,
        //         label: 'G',
        //         icon: {
        //             url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        //             scaledSize: new google.maps.Size(30, 40)
        //         }
        //     });
        //     bounds.extend(goingMarker.position);
        //     const directionsService = new google.maps.DirectionsService();
        //     const directionsRenderer = new google.maps.DirectionsRenderer();
        //     directionsRenderer.setMap(map);

        //     const request = {
        //         origin: userLocation,
        //         destination: goingLocation,
        //         travelMode: google.maps.TravelMode.DRIVING
        //     };

        //     directionsService.route(request, function (result, status) {
        //         if (status == google.maps.DirectionsStatus.OK) {
        //             directionsRenderer.setDirections(result);
        //         }
        //     });
            
        //     const geocoder = new google.maps.Geocoder();
        //     geocodeLatLng(geocoder, userLocation, 'fromAddress');
        //     geocodeLatLng(geocoder, goingLocation, 'toAddress');
            
        //     const userInfoWindow = new google.maps.InfoWindow({
        //         content: User ID: ${locations[0].user_id}
        //     });
        //     userMarker.addListener('click', function () {
        //         userInfoWindow.open(map, userMarker);
        //     });
        //     const goingInfoWindow = new google.maps.InfoWindow({
        //         content: Captain ID: ${locations[0].captain_id}
        //     });
        //     goingMarker.addListener('click', function () {
        //         goingInfoWindow.open(map, goingMarker);
        //     });

        //     map.fitBounds(bounds);
        // }

        // function geocodeLatLng(geocoder, latLng, elementId) {
        //     geocoder.geocode({ 'location': latLng }, function (results, status) {
        //         if (status === 'OK') {
        //             if (results[1]) {
        //                 document.getElementById(elementId).textContent = results[1].formatted_address;
        //             }
        //         }
        //     });
        // }

    