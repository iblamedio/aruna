import { FunctionComponent } from "react";
import { APIProvider, Map, useMarkerRef, Marker } from "@vis.gl/react-google-maps";
import './styles.css';

export const MapComponent: FunctionComponent = () => {

    const API_KEY: string = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'banana';

    const [markerRef, marker] = useMarkerRef();
      

    return (
        <div className="map-container">
        {/* <div className="map-header">
            <h1>LOCALIZAÇÃO DO EMPREENDIMENTO</h1>
        </div> */}
            <APIProvider apiKey={API_KEY}>
                <Map
                    style={{width: '100vw', height: '100%'}}
                    defaultCenter={{lat: -27.13547638656018, lng: -48.603262141278066}}
                    defaultZoom={17}
                    disableDefaultUI
                >
                    <Marker ref={markerRef} position={{lat: -27.13547638656018, lng: -48.603262141278066}} />
                </Map>
            </APIProvider>
        </div>
    )
}