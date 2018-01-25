import React from 'react';
import './editAlbum.less';
import FileInput from "../fileInput/FileInput";
import {CrossIcon, SaveIcon} from "../Icons";
import Card from "./Card";
import http from '../../HttpService';
import connect from "react-redux/es/connect/connect";
import {
    deleteAlbum, deleteFotoFromAlbum, saveAlbumDescription,
    saveFotoDescription, saveItemsOrder
} from "../../actions/albumActions";
import Dialog from "../dialog/Dialog";
import EditCanvas from "./EditCanvas";
import {isVideo} from "../../utils/index";
import * as styles from "../../constants/styles";
const routesModule = require('../../constants/routes');
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-scale-multiple.scss';
import 'loaders.css/src/animations/ball-grid-pulse.scss';
import Alert from 'react-s-alert';


@connect(store => ({}), {
    deleteFotoFromAlbum,
    saveFotoDescription,
    saveAlbumDescription,
    deleteAlbum,
    saveItemsOrder
})
class EditAlbum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dragStarted: false,
            dragFrom: null,
            dragFromEl: null,
            dragObj: null,
            openPicture: null,
            openedAlbum: false,
            album: null,
            openedDialog: false,
            imageDownloaded: false,
            imageLoading: true,
            imageLoadStarted: false,
            albumLoading: false
        }
    }

    componentDidMount() {
        this.loadAlbum();
    }

    loadAlbum() {
        this.setState({albumLoading: true});
        http.doGet(routesModule.routes.GET_ALBUM(this.props.match.params.id))
            .then(result => {
                result.images.sort((x, y) => x.order - y.order);
                result.images.forEach(image => image.src = image.src + '?forceUpdate=' + new Date().toISOString())
                this.setState({album: result, albumLoading: false});
            })
            .catch(e => Alert.error(e.response.data.error, {}));
    }

    openDetails(picture) {
        this.setState({openPicture: picture});
    }

    openAlbumDetails() {
        this.setState({openedAlbum: true});
    }

    onCrossClick() {
        this.setState({openPicture: null, openedAlbum: false});
    }

    deleteItem(picture) {
        if (this.state.album.images.length == 1) {
            this.setState({openedDialog: true});
            return;
        }

        this.props.deleteFotoFromAlbum(picture._id);
        const newPictures = this.state.album.images.filter(p => p._id != picture._id);
        const newAlbum = Object.assign({}, {
            ...this.state.album,
            images: newPictures,
        })
        this.setState({album: newAlbum});
    }

    removeAlbum() {
        this.props.deleteAlbum(this.state.album._id);
        this.props.history.push('/');
    }

    changeState(obj) {
        this.setState(obj);
    }

    saveFotoDescription(picture) {
        const newPictures = [...this.state.album.images];
        const editedPicture = this.state.album.images.find(p => p._id == picture._id);
        if (this.pinput.value) editedPicture.name = this.pinput.value;
        if (this.ptextarea.value) editedPicture.text = this.ptextarea.value;

        this.props.saveFotoDescription(this.state.album._id, editedPicture);

        const newAlbum = Object.assign({}, {
            ...this.state.album,
            images: newPictures,
        });
        this.setState({album: newAlbum, openPicture: null});
    }

    saveAlbumDescription() {
        const editedAlbum = Object.assign({}, {...this.state.album});
        if (this.ainput.value) editedAlbum.name = this.ainput.value;
        if (this.atextarea.value) editedAlbum.description = this.atextarea.value;

        this.props.saveAlbumDescription(editedAlbum);

        this.setState({album: editedAlbum, openedAlbum: false});
    }

    uploadFile(file) {
        http.sendFile(routesModule.routes.UPLOAD_FOTO, file)
            .then(downloadedFoto => {
                if (isVideo(downloadedFoto.src)) {
                    http.doPost(routesModule.routes.FOTO_ROUTE, {
                        src: downloadedFoto.src,
                        album: this.state.album._id
                    }).then(result => {
                        const newPictures = [...this.state.album.images];
                        newPictures.push(result);
                        const newAlbum = Object.assign({}, {
                            ...this.state.album,
                            images: newPictures,
                        });

                        this.setState({
                            //imageDownloaded: null,
                            album: newAlbum
                        });
                    }).catch(e => Alert.error(e.response.data.error, {}));
                } else {
                    this.setState({
                        imageDownloaded: downloadedFoto.src
                    });
                }

            })
            .catch(e => Alert.error(e.response.data.error, {}));
    }

    onImageLoad() {
        this.setState({imageLoading: false, });
    }

    onImageError() {
        Alert.error("Image for name {" + this.state.album.images[0].name + "} loading failed", {});
        this.setState({imageLoading: false});
    }

    loadImage(src) {
        this.setState({imageLoadStarted: true});
        const imageObj = new Image()
        imageObj.onload = this.onImageLoad.bind(this);
        imageObj.onerror = this.onImageError.bind(this);
        imageObj.src = src;
    }

    renderEditAlbumCard() {
        if(!this.state.imageLoadStarted) this.loadImage(this.state.album.images[0].src);
        return <div className='edit_album_card' key="edit_album_card">
            {this.state.imageLoading ? <Loader type="ball-scale-multiple"/> : isVideo(this.state.album.images[0].src)
                ? <video className="album_image"
                         height={styles.picture_edit_height}
                         width={styles.picture_edit_width}
                         controls="controls">
                    <source src={this.state.album.images[0].src}/>
                </video>
                : <img className='album_image'
                       src={this.state.album.images[0].src}/>}
            <div className='album_name' onClick={() => this.openAlbumDetails()}>{this.state.album.name}</div>
            <CrossIcon className='cross_icon' onClick={() => this.setState({openedDialog: true})}/>
        </div>
    }

    renderImages() {
        return this.state.album.images.sort((x, y) => x.order - y.order).map(p => <Card
            key={p._id}
            picture={p}
            pictures={this.state.album.images}
            openDetails={(p) => this.openDetails(p)}
            deleteItem={(p) => this.deleteItem(p)}
            replaceImage={(target) => this.replaceImage(target)}
            openPicture={this.state.openPicture}
            changeDragState={(obj) => this.changeState(obj)}
            dragState={this.state}
            updateOrder={(album) => this.props.saveItemsOrder(album)}
            loadAlbum={() => this.loadAlbum()}
        />)
    }

    renderFileInput() {
        return !this.state.imageDownloaded && <FileInput className='edit_file_input'
                                                         disabled={this.state.openPicture}
                                                         label='Choose new foto'
                                                         uploadFile={(file) => this.uploadFile(file)}
            />
    }

    renderEditCanvas() {
        return this.state.imageDownloaded && !isVideo(this.state.imageDownloaded) && <EditCanvas
                image={this.state.imageDownloaded}
                cleanImage={obj => this.changeState(obj)}
                album={this.state.album}
            />
    }

    renderChangeFotoTextInfoDialog() {
        return this.state.openPicture &&
            <div className='new_text_overlay'>
                <div className='new_text'>
                    <div className="new_text_caption">Enter foto name and description:</div>
                    <SaveIcon className='save_icon' onClick={() => this.saveFotoDescription(this.state.openPicture)}/>
                    <CrossIcon className='cross_icon' onClick={() => this.onCrossClick()}/>
                    <input defaultValue={this.state.openPicture.name} ref={i => this.pinput = i}/>
                    <textarea defaultValue={this.state.openPicture.text} ref={t => this.ptextarea = t}/>
                </div>
            </div>
    }

    renderChangeAlbumTextInfoDialog() {
        return this.state.openedAlbum &&
            <div className='new_text_overlay'>
                <div className='new_text'>
                    <div className="new_text_caption">Enter album name and description:</div>
                    <SaveIcon className='save_icon' onClick={() => this.saveAlbumDescription()}/>
                    <CrossIcon className='cross_icon' onClick={() => this.onCrossClick()}/>
                    <input defaultValue={this.state.album.name} ref={i => this.ainput = i}/>
                    <textarea defaultValue={this.state.album.description} ref={t => this.atextarea = t}/>
                </div>
            </div>
    }

    renderDeleteDialog() {
        return this.state.openedDialog && <Dialog onClick={() => this.removeAlbum()}
                                                  onClose={() => this.setState({openedDialog: false})}
                                                  text="Do you really want to delete the album?"/>
    }


    render() {
        const {album, albumLoading} = this.state;
        if(albumLoading) return <Loader type="ball-grid-pulse" className='Data_loader'/>;
        if (!album) return null;

        return <React.Fragment>
            {this.renderEditAlbumCard()}
            {this.renderImages()}
            {this.renderFileInput()}
            {this.renderEditCanvas()}
            {this.renderChangeFotoTextInfoDialog()}
            {this.renderChangeAlbumTextInfoDialog()}
            {this.renderDeleteDialog()}
        </React.Fragment>;
    }
}

export default EditAlbum;
