import React from 'react';
import './editAlbum.less';
import FileInput from "../fileInput/FileInput";
import {CrossIcon, SaveIcon} from "../Icons";
import Card from "./Card";
import http from '../../HttpService';
import connect from "react-redux/es/connect/connect";
import {deleteFotoFromAlbum, saveFotoDescription} from "../../actions/albumActions";
const routesModule = require('../../constants/routes');

@connect(store => ({}), {
    deleteFotoFromAlbum,
    saveFotoDescription
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
            album: null
        }
    }

    componentDidMount() {
        http.doGet(routesModule.routes.GET_ALBUM(this.props.match.params.id))
            .then(result => this.setState({album: result}));
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
        this.props.deleteFotoFromAlbum(picture.id, this.state.album.id);
        const newPictures = this.state.album.images.filter(p => p.id != picture.id);
        const newAlbum = Object.assign({}, {
            ...this.state.album,
            images: newPictures,
        })
        this.setState({album: newAlbum});
    }

    changeDragState(obj) {
        this.setState(obj);
    }

    saveFotoDescription(picture) {
        const newPictures = [...this.state.album.images];
        const editedPicture = this.state.album.images.find(p => p.id == picture.id);
        if (this.pinput.value) editedPicture.name = this.pinput.value;
        if (this.ptextarea.value) editedPicture.text = this.ptextarea.value;

        this.props.saveFotoDescription(this.state.album.id, editedPicture);

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

        //this.props.saveAlbumDescription(this.state.album.id, editedPicture);

        this.setState({album: editedAlbum, openedAlbum: false});
    }

    render() {
        const {openPicture, album, openedAlbum} = this.state;
        if(album) {
            console.dir(album.images);

        }
        return album && (
                    <div className='edit_container'>
                        <div className='edit_album_card'>
                            <img className='album_image' src={album.images[0].src}/>
                            <div className='album_name' onClick={() => this.openAlbumDetails()}>{album.name}</div>
                        </div>
                        {album.images.sort((x, y) => x.order - y.order).map(p => <Card
                            key={p.id}
                            picture={p}
                            pictures={album.images}
                            openDetails={(p) => this.openDetails(p)}
                            deleteItem={(p) => this.deleteItem(p)}
                            replaceImage={(target) => this.replaceImage(target)}
                            openPicture={openPicture}
                            changeDragState={(obj) => this.changeDragState(obj)}
                            dragState={this.state}
                        />)}
                        <FileInput className='new_image' disabled={openPicture} label='Choose new foto'/>
                        {openPicture &&
                        <div className='new_text'>
                            <input defaultValue={openPicture.name} ref={i => this.pinput = i}/>
                            <textarea defaultValue={openPicture.text} ref={t => this.ptextarea = t}/>
                            <SaveIcon className='save_icon' onClick={() => this.saveFotoDescription(openPicture)}/>
                            <CrossIcon className='cross_icon' onClick={() => this.onCrossClick()}/>
                        </div>}
                        {openedAlbum &&
                        <div className='new_text'>
                            <input defaultValue={album.name} ref={i => this.ainput = i}/>
                            <textarea defaultValue={album.description} ref={t => this.atextarea = t}/>
                            <SaveIcon className='save_icon' onClick={() => this.saveAlbumDescription()}/>
                            <CrossIcon className='cross_icon' onClick={() => this.onCrossClick()}/>
                        </div>}
                    </div>
            );
    }
}

export default EditAlbum;
