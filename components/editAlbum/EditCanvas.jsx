import React from 'react';
import './editCanvas.less';
import {CrossIcon, RotateIcon, SaveIcon} from "../Icons";
import AvatarEditor from "./ImageRotater";
import * as styles from "../../constants/styles";
const routesModule = require('../../constants/routes');
import http from '../../HttpService';
import Alert from 'react-s-alert';
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-scale-multiple.scss';

class EditCanvas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
            width: parseInt(styles.picture_edit_width),
            height: parseInt(styles.picture_edit_height),
            imageLoading: true,
            imageSaving: false
        }
    }

    getEditedImage() {
        this.setState({imageSaving: true});
        const {album, image} = this.props;
        this.avatar.getImage().toBlob(img => {
            let name = image.split('/');
            name = name[name.length - 1];
            const file = new File([img], name);

            http.sendFile(routesModule.routes.UPLOAD_FOTO, file)
                .then(downloadedFoto => {
                    http.doPost(routesModule.routes.FOTO_ROUTE, {
                        src: downloadedFoto.src,
                        album: album._id
                    }).then(result => {
                            const newPictures = [...album.images];
                            newPictures.push(result);
                            const newAlbum = Object.assign({}, {
                                ...album,
                                images: newPictures,
                            });

                            this.props.cleanImage({
                                imageDownloaded: null,
                                album: newAlbum
                            });
                            this.setState({imageSaving: false});
                        })
                        .catch(e => {
                            this.setState({imageSaving: false});
                            Alert.error(e.response.data.error, {});
                        });
                })
                .catch(e => {
                    this.setState({imageSaving: false});
                    Alert.error(e.response.data.error, {})
                });
        });
    }

    rotateImage() {
        const newAngle = this.state.angle + 90;
        this.calculateParameters(newAngle);
    }

    calculateParameters(newAngle) {
        const newState = {
            height: parseInt(styles.picture_edit_height),
            angle : newAngle
        };
        newState.width = newAngle % 180 == 0
            ? parseInt(this.naturalWidth * this.state.height / this.naturalHeight)
            : parseInt(this.naturalHeight * this.state.height / this.naturalWidth);
        this.setState(newState);
    }

    onLoad(imgInfo) {
        this.setState({imageLoading: false});
        this.naturalWidth = imgInfo.naturalWidth;
        this.naturalHeight = imgInfo.naturalHeight;

        this.calculateParameters(this.state.angle);
    }

    onImageFailure() {
        Alert.error("Image loading failed", {});
        this.setState({imageLoading: false});
    }

    closeImage() {
        this.props.cleanImage({imageDownloaded: false});
    }

    render() {
        const {image} = this.props;
        const {angle, width, height, imageLoading, imageSaving} = this.state;
        if(imageSaving) return <div className="Edit_canvas"><Loader type="ball-scale-multiple"/></div>;
        return <div className="Edit_canvas">
            <AvatarEditor
                ref={ae => this.avatar = ae}
                image={image}
                rotate={angle}
                width={width}
                height={height}
                onLoadSuccess={(imgInfo) => this.onLoad(imgInfo)}
                onLoadFailure={() => this.onImageFailure()}
                loading={imageLoading}
            />
            <RotateIcon className='rotate_icon' onClick={() => this.rotateImage()}/>
            <SaveIcon className='save_icon' onClick={() => this.getEditedImage()}/>
            <CrossIcon className='cross_icon' onClick={() => this.closeImage()}/>
        </div>
    }
}

export default EditCanvas;
