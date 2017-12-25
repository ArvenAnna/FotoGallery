import React from 'react';
import styled from 'styled-components';
import {CrossIcon} from "../Icons";
import FileInput from "../fileInput/FileInput";
import './addNewAlbum.less';
import Scroll from "../scroll/Scroll";

const Label = styled.span`
  width: 100%;
  margin-bottom: 0.25rem;
`

class AddNewAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.modal = null;
        this.state = {
            height: '100%'
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
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;

        if(this.modal) {
            const modalStyle = this.modal.currentStyle || window.getComputedStyle(this.modal);
            const height = Math.min(parseInt(y), parseInt(modalStyle.height)) + 'px';
            this.setState({
                height
            });
        }
    }

    render() {
        return <div className='add_album'> <Scroll width='40%' height={this.state.height} className='scroll_container'>
            <div className='add_album_modal' ref={r => this.modal = r}>

                <CrossIcon onClick={this.props.closeModal}/>
                <Label>Name</Label>
                <input/>
                <Label>Title image:</Label>
                <FileInput/>
                <Label>Description</Label>
                <textarea/>
                <button>ok</button>

            </div></Scroll>
        </div>

    }
}

export default AddNewAlbum;