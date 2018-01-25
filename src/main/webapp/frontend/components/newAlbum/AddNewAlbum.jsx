import React from 'react';
import styled from 'styled-components';
import {CrossIcon} from "../Icons";
import FileInput from "../fileInput/FileInput";
import './addNewAlbum.less';
import connect from "react-redux/es/connect/connect";
import {isVideo} from "../../utils/index";
import {Scrollbars} from "react-custom-scrollbars";
const routesModule = require('../../constants/routes');
import http from '../../HttpService';
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-scale-multiple.scss';
import {
    createAlbum
} from "../../actions/albumActions";

const Label = styled.span`
  width: 100%;
  margin-bottom: 0.25rem;
`

@connect(store => ({}), {
    createAlbum
})
class AddNewAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.modal = null;
        this.state = {
            height: '100%',
            name: '',
            description: '',
            src: null,
            fileUploading: false
        }
    }

    componentDidMount() {
        setTimeout(() => this.scrollbars.forceUpdate(), 100);

        // window.addEventListener('resize', () => this.calculateModalHeight())
        this.calculateModalHeight();
    }

    calculateModalHeight() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        if (this.modal) {
            const modalStyle = this.modal.currentStyle || window.getComputedStyle(this.modal);
            const height = Math.min(parseInt(y), parseInt(modalStyle.height)) + 'px';
            this.setState({
                height
            });
        }
    }

    uploadFile(file) {
        this.setState({fileUploading: true});
        http.sendFile(routesModule.routes.UPLOAD_FOTO, file)
            .then(id => {
                this.setState({src: id.src, fileUploading: false});
            })
            .catch(e => this.setState({fileUploading: false}));
    }

    createAlbum() {
        const {name, description, src} = this.state;
        if (name && description && src) {
            this.props.createAlbum({
                name, description, src
            });
            this.props.closeModal();
        }

    }

    render() {
        const {name, description, src, fileUploading, height} = this.state;

        return <div className='add_album'>
            <Scrollbars
                hideTracksWhenNotNeeded={true}
                className="scroll_bar"
                // renderTrackVertical={({ style, ...props }) =>
                        //     <div {...props} style={{ ...style, backgroundColor: 'blue' }}/>}
                         // renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                         // renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                        ref={(scrollbars) => this.scrollbars = scrollbars}
            >
            <div className='add_album_modal' ref={r => this.modal = r}>

                <CrossIcon className="cross_icon" onClick={this.props.closeModal}/>
                <Label>Name</Label>
                <input value={name} onChange={(e) => this.setState({name: e.target.value})}/>
                <Label>Title image:</Label>
                {fileUploading
                    ? <Loader type="ball-scale-multiple"/>
                    : src
                    ? (isVideo(src) ? <video controls="controls"><source src={src}/></video> : <img src={src}/>)
                    :
                    <FileInput label='Choose main foto'
                               uploadFile={(file) => this.uploadFile(file)}/>}
                <Label>Description</Label>
                <textarea value={description} onChange={(e) => this.setState({description: e.target.value})}/>
                {src && !isVideo(src) && <div className="warning">You will be able to rotate your foto in the edit mode after album creation.</div>}
                <button className="ok_button" onClick={() => this.createAlbum()}>ok</button>

            </div>
            </Scrollbars>
        </div>


    }
}

export default AddNewAlbum;