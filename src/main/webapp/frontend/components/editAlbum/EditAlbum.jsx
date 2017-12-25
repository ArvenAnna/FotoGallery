import React from 'react';
import './editAlbum.less';
import FileInput from "../fileInput/FileInput";
import {CrossIcon, SaveIcon} from "../Icons";

class EditAlbum extends React.Component {

    constructor(props) {
        super(props);
        this.pictures = [{
            id: 1,
            src: '/foto/download.jpg',
            order: 1
        }, {
            id: 2,
            src: '/foto/images.jpg',
            order: 2
        }];
        this.state = {
            dragStarted: false,
            dragFrom: null,
            dragFromEl: null,
            dragObj: null,
            isTextOpen: false
        }
    }

    componentDidMount() {
        const els = document.getElementsByClassName('drag_image');
        for(let i=0; i<els.length; i++) {
            els[i].addEventListener('replace', (e)=>this.replaceImage(e.target))
        }
    }

    onMouseDown(e, picture) {
        e.preventDefault();

        const x = e.clientX + window.scrollX;
        const y = e.clientY + window.scrollY;

        const style = e.target.currentStyle || window.getComputedStyle(e.target);

        const elStartLeft = parseInt(style.left, 10);
        const elStartTop = parseInt(style.top, 10);
        const dragObj = {
            x, y, elStartLeft, elStartTop
        }
        this.setState({dragStarted: true, dragFrom:picture, dragObj, dragFromEl: e.target});
        e.target.style.zIndex = 10;
    }

    onMouseMove(e, picture) {
        e.preventDefault();
        if(this.state.dragStarted && this.state.dragFrom == picture) {
            const x = e.clientX + window.scrollX;
            const y = e.clientY + window.scrollY;
            e.target.style.top = (this.state.dragObj.elStartTop + y - this.state.dragObj.y) + 'px';
            e.target.style.left = (this.state.dragObj.elStartLeft + x - this.state.dragObj.x) + 'px';
        }
    }

    replaceImage(target) {
        const dragFrom = this.state.dragFrom;

        const attr = target.getAttribute('imgid');
        const picture = this.pictures.find(p => p.id == attr);

        this.setState({dragStarted: false, dragFrom:null, dragObj:null, dragFromEl:null});

        const prevOrder = dragFrom.order;
        dragFrom.order = picture.order;
        picture.order = prevOrder;
    }

    onMouseUp(e, picture) {
        e.preventDefault();

        const dragFrom = this.state.dragFrom;

        this.state.dragFromEl.style.top = '0px';
        this.state.dragFromEl.style.left = '0px';

        e.target.style.top = '0px';
        e.target.style.left = '0px';

        this.state.dragFromEl.style.zIndex = 0;

        if(picture == this.state.dragFrom) {
            const event = new Event('replace');
            document.elementFromPoint(e.clientX + window.scrollX, e.clientY + window.scrollY)
                .dispatchEvent(event);
            return;
        }

        this.setState({dragStarted: false, dragFrom:null, dragObj:null, dragFromEl:null});
        const prevOrder = dragFrom.order;
        dragFrom.order = picture.order;
        picture.order = prevOrder;

    }

    onClick(e, p) {
        this.setState({
            isTextOpen: true
        });
    }

    onCrossClick() {
        this.setState({
            isTextOpen: false
        })
    }

    render() {
        const {isTextOpen} = this.state;
        return (
            <div className='edit_container'>
                {this.pictures.sort((x,y) => x.order-y.order).map(p => isTextOpen
                    ? <img className='drag_image'
                           src={p.src}
                           key={p.id}
                           imgid={p.id}
                           draggable={false}
                    />
                    : <img className='drag_image'
                    src={p.src}
                    key={p.id}
                    imgid={p.id}
                    draggable={true}
                    onMouseDown={e => this.onMouseDown(e, p)}
                    onMouseUp={e => this.onMouseUp(e, p)}
                    onMouseMove={e => this.onMouseMove(e, p)}
                    onDoubleClick={e => this.onClick(e, p)}
                />)}
                <FileInput className='new_image' disabled={isTextOpen}/>
                {isTextOpen &&
                <div className='new_text' ref={t => this.text = t}>
                    <textarea/>
                    <SaveIcon className='save_icon'/>
                    <CrossIcon className='cross_icon' onClick={() => this.onCrossClick()}/>
                </div>}

            </div>
        );
    }
}

export default EditAlbum;
