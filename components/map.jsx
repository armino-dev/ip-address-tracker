import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import iconLocation from '../public/icon-location.svg'

const centerPosition = [45.398066, 26.885366]

export default class Map extends React.Component {
    constructor(props) {
        super()
        this.props = props
        this.state = {
            map: null,
        }

        this.setMap = this.setMap.bind(this)
    }

    componentDidUpdate() {
        this.state.map.setView(this.props.position)
    }

    setMap(map) {
        this.setState({
            map
        })
    }

    render() {
        const { position } = this.props.position ? this.props : { position: centerPosition }

        const marker = new L.Icon({
            iconUrl: iconLocation.src,
            iconSize: new L.Point(46, 56),
        })

        return (
            <>
                <MapContainer
                    center={position}
                    zoom={12}
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%" }}
                    className="z-10"
                    zoomControl={false}
                    whenCreated={this.setMap}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <TileLayer 
                        attribution='&copy; <a href="https://armino.dev" target="_blank" rel="no-follow" title="A sample site made by Armino">Made by Armino</a>'
                        url="https://armino.dev"
                    />
                    <Marker position={position} icon={marker} >
                        <Popup>
                            Latitude: {position[0]}<br />
                            Longitude: {position[1]}
                        </Popup>
                    </Marker>
                    <ZoomControl position="bottomright" />
                </MapContainer>
            </>
        )
    }
}
