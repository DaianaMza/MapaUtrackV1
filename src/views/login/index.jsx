import React, { Component } from 'react';
import './index.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import myIcon from '../../icon/iconbus.png';
import L from 'leaflet';
import Logo from '../../icon/logo.png'




export default function Index() {
    const position = [51.505, -0.09];
    const zoom = 13;
    const lugares = [
        { nombre: "London Eye", latitud: 51.5033, longitud: -0.1195 },
        { nombre: "Big Ben", latitud: 51.5007, longitud: -0.1246 },
        { nombre: "Buckingham Palace", latitud: 51.5014, longitud: -0.1419 },
    ];

    const myIconOptions = {
        iconUrl: myIcon,
        iconSize: [50, 50],
    };
    const myIconInstance = L.icon(myIconOptions);


    return (
        <div className="map-container">
            <div className="logo-container">
                <img src={Logo} alt="Logo" width={90} />
            </div>
            <MapContainer center={position} zoom={zoom} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {lugares.map((lugar) => (
                    <Marker key={lugar.nombre} position={[lugar.latitud, lugar.longitud]} icon={myIconInstance}>
                        <Popup>{lugar.nombre}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}