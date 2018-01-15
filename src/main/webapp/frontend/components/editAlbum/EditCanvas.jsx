import React from 'react';
import './editCanvas.less';
import {CrossIcon, RotateIcon, SaveIcon} from "../Icons";
import AvatarEditor from "./ImageRotater";
import * as styles from "../../constants/styles";
const routesModule = require('../../constants/routes');
import http from '../../HttpService';

class EditCanvas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
            width: parseInt(styles.picture_edit_width),
            height: parseInt(styles.picture_edit_height)
        }
    }

    getEditedImage() {
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
                        });
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
        this.naturalWidth = imgInfo.naturalWidth;
        this.naturalHeight = imgInfo.naturalHeight;

        this.calculateParameters(this.state.angle);
    }

    closeImage() {
        this.props.cleanImage({imageDownloaded: false});
    }

    render() {
        const {image} = this.props;
        const {angle, width, height} = this.state;
        return <div className="Edit_canvas">
            <AvatarEditor
                ref={ae => this.avatar = ae}
                image={image}
                rotate={angle}
                width={width}
                height={height}
                onLoadSuccess={(imgInfo) => this.onLoad(imgInfo)}
            />
            <RotateIcon className='rotate_icon' onClick={() => this.rotateImage()}/>
            <SaveIcon className='save_icon' onClick={() => this.getEditedImage()}/>
            <CrossIcon className='cross_icon' onClick={() => this.closeImage()}/>
        </div>
    }
}

export default EditCanvas;
