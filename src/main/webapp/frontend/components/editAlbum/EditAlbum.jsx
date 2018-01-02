import React from 'react';
import './editAlbum.less';
import FileInput from "../fileInput/FileInput";
import {CrossIcon, SaveIcon} from "../Icons";
import Card from "./Card";
import http from '../../HttpService';
import connect from "react-redux/es/connect/connect";
import {deleteFotoFromAlbum, saveFotoDescription} from "../../actions/albumActions";
const routesModule = require('../../constants/routes');

@connect(store => ({

}), {
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

    onCrossClick() {
        this.setState({openPicture: null});
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
        if(this.input.value) editedPicture.name = this.input.value;
        if(this.textarea.value) editedPicture.text = this.text.value;

        this.props.saveFotoDescription(this.state.album.id, editedPicture);

        const newAlbum = Object.assign({}, {
            ...this.state.album,
            images: newPictures,
        });
        this.setState({album: newAlbum, openPicture: null});
    }

    render() {
        const {openPicture,album} = this.state;
        return album && (
            <div className='edit_container'>
                {album.images.sort((x,y) => x.order-y.order).map(p => <Card
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
                <div className='new_text' ref={t => this.text = t}>
                    <input defaultValue={openPicture.name} ref={i => this.input = i}/>
                    <textarea defaultValue={openPicture.text} ref={t => this.textarea = t}/>
                    <SaveIcon className='save_icon' onClick={() => this.saveFotoDescription(openPicture)}/>
                    <CrossIcon className='cross_icon' onClick={() => this.onCrossClick()}/>
                </div>}

            </div>
        );
    }
}

export default EditAlbum;
