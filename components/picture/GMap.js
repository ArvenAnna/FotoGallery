import React from 'react';
import {CrossIcon} from "../Icons";
import './map.less';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import connect from "react-redux/es/connect/connect";
import {saveFotoInformation} from "../../actions/albumActions";

@connect(store => ({}), {
    saveFotoInformation
})
class GMap extends React.Component {

    constructor(props) {
        super(props);
        const foto = props.images[props.index];
        this.state = {
            selectedPlace: {},
            currentLocation: {},
            foto: foto,
            mapFoto: null
        }
    }

    componentDidMount() {
        const foto = this.props.images[this.props.index];
        if (foto.position) {
            this.setState({ currentLocation: foto.position });
        } else if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                })
            })
        }
    }

    onMarkerClick(foto) {
        this.setState({mapFoto: foto.src});
    }

    onMapClicked(g, e, r) {
        console.log(r.latLng.lat());
        const foto = Object.assign({}, this.state.foto);
        foto.position = {lat: r.latLng.lat(), lng: r.latLng.lng()};
        this.setState({foto});
        this.props.changeCoordinates(foto);
        this.props.saveFotoInformation(foto);
    }

    render() {
        const {foto} = this.state;
        let images =[...this.props.images];
        images.splice(this.props.index, 1);

        if (!this.state.currentLocation || !this.state.currentLocation.lat) return null;
        if(!this.props.google) return null;

        return <div className="map_container">
            <CrossIcon className='cross'
                       onClick={this.props.close}/>
            <Map
                google={this.props.google}
                zoom={14}
                initialCenter={ this.state.currentLocation }
                onClick={(a, b, c) => this.onMapClicked(a, b, c)}
            >

                {foto.position &&
                <Marker onClick={() => this.onMarkerClick(foto)}
                        key="active"
                        title={foto.name}
                        name={foto.name}
                        position={foto.position}
                        icon={{
                            url: "../../svg/placeholder_red.svg",
                            anchor: new google.maps.Point(16,16),
                            scaledSize: new google.maps.Size(32,32)
                        }}
                />}

                {images && images.filter(image => image.position).map((image, index) => <Marker
                                                       onClick={() => this.onMarkerClick(image)}
                                                       key={index}
                                                       title={image.name}
                                                       name={image.name}
                                                       position={image.position}
                                                       icon={{
                                                            url: "../../svg/placeholder_green.svg",
                                                            anchor: new google.maps.Point(16,16),
                                                            scaledSize: new google.maps.Size(32,32)
                                                       }}
                />)}

            </Map>
            {this.state.mapFoto && <img src={this.state.mapFoto}
                                        className="map_foto"
                                        onClick={() => this.setState({mapFoto: null})}/>}
        </div>
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDWNe8nbXT808Y9VT3ei5JbVBR-jBK-Y0s")
})(GMap)