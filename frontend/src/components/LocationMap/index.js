import React, { useRef, useEffect, useState,Component } from "react";
import mapboxgl from "mapbox-gl";
import './styles/map.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


//Add the access token here

mapboxgl.accessToken = "pk.eyJ1IjoiZGlhbW9uZHNzaGluZSIsImEiOiJja21ranZkdW0xMXEwMnZzMTEyM3hhM2YwIn0.JM9YXMef9P7iKu52jt5-KQ";
const Reverseg_geocode = "https://api.tomtom.com/search/2/reverseGeocode/37.553,-122.453.JSON?key=c7nsCFO1nd9rpS8mRxfeJlFZl5FT2Md7";
var longlat={"long":0,"lat":0}
let TextAddress =""
const Map = () => {

  const history = useHistory();

  const [address,setAddress]=useState(0);
  const mapContainerRef = useRef(null);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [zoom, setZoom] = useState(5);
 
function updateLoc() {
  console.log(longlat.long)
  console.log(longlat.lat)

  
}


function successPosition(position) {
    //Mapbox receives longitude and latitude from Geolocation API
    setLongitude(position.coords.longitude)
    setLatitude(position.coords.latitude)
  }
  
  //When there is an error in fetching the position the position with these coordinates is mocked.
  function errorPosition() {
    setLongitude(12.9716)
    setLatitude(77.5946)
    
  }

  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      // center: [latitude, longitude],
      center: [72.943187,19.188422 ],
      zoom: zoom,
    });
    var marker = new mapboxgl.Marker({draggable: true})
    .setLngLat([ 72.94318719476757,19.188422818024094])
    .addTo(map);
      function onDragEnd() {
    var lngLat = marker.getLngLat();
    map.flyTo({
      center: [lngLat.lng,lngLat.lat]
      });
    // coordinates.style.display = 'block';

    console.log('Longitude: ' + lngLat.lng + 'Latitude: ' + lngLat.lat);
    setMarker(lngLat.lng,lngLat.lat)
    // latlong={"long":lngLat.lng,"lat":lngLat.lat}
    }

    marker.on('dragend', onDragEnd);
    //This adds zoom button and compass
    map.addControl(new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true
    }), "bottom-left");

    var geocoder = new MapboxGeocoder({
      // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
      placeholder: 'Search ', // Placeholder text for the search bar
      
      });
    map.addControl(geocoder);
    geocoder.on('result', function(e) {
      console.log(e.result.place_name);
      console.log(e.result.geometry.coordinates)
      setAddress(e.result.place_name);
      console.log(address)
      marker.setLngLat(e.result.geometry.coordinates)
      // map.getSource('single-point').setData(e.result.geometry);
      // marker.setLngLat(e.result.geometry.coordinates)
      map.flyTo({
      center: e.result.geometry.coordinates
      });
      setMarker(... e.result.geometry.coordinates)
    });
    var geolocate=new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: false,
      showUserLocation:false,
      showAccuracyCircle:false
      })
    map.addControl(geolocate,"top-left");
    geolocate.on('geolocate', function(loc) {
      console.log(loc.coords)
      console.log(loc.coords.latitude)
      setMarker(loc.coords.longitude,loc.coords.latitude)
      
      });
    map.on("move", () => {
      setLongitude(map.getCenter().longitude);
      setLatitude(map.getCenter().latitude);
      setZoom(map.getZoom().toFixed(2));
  
    });
    function setMarker(lng,lat){
      longlat={"long":lng,"lat":lat}
      setLatitude(lat)
      setLongitude(lng)
      
      marker.setLngLat([lng,lat])
      map.flyTo({
      center: [lng,lat]
      });

      

    var url="https://api.tomtom.com/search/2/reverseGeocode/+"+lat+","+lng+".JSON?key=c7nsCFO1nd9rpS8mRxfeJlFZl5FT2Md7"

axios.get(url).then(res => {
        setAddress(res.data.addresses[0].address.streetName+","+res.data.addresses[0].address.municipalitySubdivision+","+res.data.addresses[0].address.municipality+","+res.data.addresses[0].address.countrySubdivision)
				console.log(res.data.addresses[0].address.streetName+res.data.addresses[0].address.municipalitySubdivision+res.data.addresses[0].address.municipality+res.data.addresses[0].address.municipality+res.data.addresses[0].address.countrySubdivision)
        // router.push('/');
			})}
      // useEffect(()=>{
      //   setLatitude(lat)
      // },[lat])
      // useEffect(()=>{
      //   setLatitude(lng)
      // },[lng])
    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  
  return (
    
    <div className="Location_form">
      <div className="Incenter">
        <h3>Enter your Location </h3>
        <Tippy placement='top' arrow={false} content="Click on top left Icon to get current location "><div className="map__container" ref={mapContainerRef} /></Tippy>
        <div className="formInput">
          <div className ="formChildren">
            <h4>Address  </h4>
            {address ? (<input type="text" placeholder ="Search Address on top right bar" className={"mapboxgl-ctrl-geocoder--input"} onClick="OnClickStyles" value={address} ></input>):(<input type="text" placeholder ="Search Address on top right bar" className={"mapboxgl-ctrl-geocoder--input"} onClick="OnClickStyles" ></input>)}
            {/* <input type="text" placeholder ="Search Address on top right bar" className={"mapboxgl-ctrl-geocoder--input"} onClick={styles.OnClickStyles} content={address} ></input> */}
            </div>
        </div>
        <div className ="MoveToRight">
          {/* <label className={styles.Continue}>Save</label> */}
          <button onClick={updateLoc} className="Continue">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Map;
