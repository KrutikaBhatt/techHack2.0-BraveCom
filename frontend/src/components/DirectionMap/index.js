import React, { Component } from 'react';
import './styles/map.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';


mapboxgl.accessToken  = "pk.eyJ1IjoiZGlhbW9uZHNzaGluZSIsImEiOiJja21ranZkdW0xMXEwMnZzMTEyM3hhM2YwIn0.JM9YXMef9P7iKu52jt5-KQ";
class DirectionMap extends Component {
    componentDidMount() {

        //Shows a base map
        const map = new mapboxgl.Map({
          container: this.mapWrapper,
          style: 'mapbox://styles/mapbox/streets-v10',
          center: [-73.985664, 40.748514],
          zoom: 12
        });

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/cycling'
          })

        map.addControl(directions, 'top-left');
        directions.setOrigin('Kalyan,Mumbai,Maharashtra');
        directions.setDestination('Dombivli, Maharashtra, India');
    }

    render() {
        return (
            <>
            <div className="Location_form">
                <div className="Incenter">
                    <div 
                        ref={el => (this.mapWrapper = el)} 
                        className="mapWrapper" 
                    />
                </div>
            </div>
          </>
        );
      }

}

export default DirectionMap;