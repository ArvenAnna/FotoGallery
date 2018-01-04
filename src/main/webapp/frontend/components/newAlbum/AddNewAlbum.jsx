import React from 'react';
import styled from 'styled-components';
import {CrossIcon} from "../Icons";
import FileInput from "../fileInput/FileInput";
import './addNewAlbum.less';
import Scroll from "../scroll/Scroll";
import connect from "react-redux/es/connect/connect";
const routesModule = require('../../constants/routes');
import http from '../../HttpService';
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
            src: null
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.calculateModalHeight())
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
        http.sendFile(routesModule.routes.UPLOAD_FOTO, file)
            .then(id => {
                this.setState({src: id.src});
            });
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
        const {name, description, src, height} = this.state;

        return <div className='add_album'>
            {/*<Scroll width='40%' height={height} className='scroll_container'>*/}
            <div className='add_album_modal' ref={r => this.modal = r}>

                <CrossIcon onClick={this.props.closeModal}/>
                <Label>Name</Label>
                <input value={name} onChange={(e) => this.setState({name: e.target.value})}/>
                <Label>Title image:</Label>
                {src ? <img src={src}/> :
                    <FileInput label='Choose main foto'
                               uploadFile={(file) => this.uploadFile(file)}/>}
                <Label>Description</Label>
                <textarea value={description} onChange={(e) => this.setState({description: e.target.value})}/>
                <button onClick={() => this.createAlbum()}>ok</button>

            </div>
        {/*</Scroll>*/}
        </div>

    }
}

export default AddNewAlbum;