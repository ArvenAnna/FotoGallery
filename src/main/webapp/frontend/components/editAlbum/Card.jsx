import React from 'react';
import './editAlbum.less';
import {CrossIcon, EditIcon} from "../Icons";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.replaceEvent = 'replace';
    }

    componentWillReceiveProps() {
        if (this.dragContainer && !this.replaceAttached) {
            this.replaceAttached = true;
            this.dragContainer.addEventListener(this.replaceEvent, e => this.replaceImage(e.target));
        }
    }

    replaceImage(target) {

        const attr = target.getAttribute('imgid');
        const picture = this.props.pictures.find(p => p.id == attr);

        this.changePictureAndClear(picture);
    }

    onMouseDown(e, picture) {
        e.preventDefault();

        const target = e.target.parentElement;

        const x = e.clientX + window.scrollX;
        const y = e.clientY + window.scrollY;

        const style = target.currentStyle || window.getComputedStyle(target);

        const elStartLeft = parseInt(style.left, 10);
        const elStartTop = parseInt(style.top, 10);
        const dragObj = {
            x, y, elStartLeft, elStartTop
        }
        this.props.changeDragState({dragStarted: true, dragFrom: picture, dragObj, dragFromEl: target});
        target.style.zIndex = 10;
    }

    onMouseMove(e, picture) {
        e.preventDefault();
        const {dragFrom, dragStarted, dragObj} = this.props.dragState;
        const target = e.target.parentElement;
        if (dragStarted && dragFrom == picture) {
            const x = e.clientX + window.scrollX;
            const y = e.clientY + window.scrollY;
            target.style.top = (dragObj.elStartTop + y - dragObj.y) + 'px';
            target.style.left = (dragObj.elStartLeft + x - dragObj.x) + 'px';
        }
    }

    onMouseUp(e, picture) {
        e.preventDefault();

        const {dragFrom, dragFromEl} = this.props.dragState;
        const target = e.target.parentElement;

        dragFromEl.style.top = '0px';
        dragFromEl.style.left = '0px';

        target.style.top = '0px';
        target.style.left = '0px';

        dragFromEl.style.zIndex = 0;

        if (picture == dragFrom) {
            const event = new Event(this.replaceEvent);
            document.elementFromPoint(e.clientX + window.scrollX, e.clientY + window.scrollY)
                .parentElement
                .dispatchEvent(event);
            return;
        }

        this.changePictureAndClear(picture);
    }

    changePictureAndClear(picture) {
        const {dragFrom, album} = this.props.dragState;

        const newPictures = [...album.images];

        const dragToPicture = album.images.find(p => p.id == picture.id);
       // editedPicture.order = prevOrder;
        const dragFromPicture = album.images.find(p => p.id == dragFrom.id);

        const prevOrder = dragFromPicture.order;
        dragFromPicture.order = dragToPicture.order;
        dragToPicture.order = prevOrder;

        newPictures.sort((x, y) => x.order - y.order);

        const newAlbum = Object.assign({}, {
            ...album,
            images: newPictures,
        });

        this.props.updateOrder(newAlbum);
        this.props.changeDragState({dragStarted: false, dragFrom: null, dragObj: null, dragFromEl: null, album: newAlbum});
    }

    render() {
        const {picture, openPicture} = this.props;
        return openPicture
            ? <div className='drag_container'
                   imgid={picture.id}>
                <img className='drag_image'
                     src={picture.src}
                     draggable={false}/>
            </div>
            : <div className='drag_container'
                   ref={r => this.dragContainer = r}
                   imgid={picture.id}
                   draggable={true}
                   onMouseDown={e => this.onMouseDown(e, picture)}
                   onMouseUp={e => this.onMouseUp(e, picture)}
                   onMouseMove={e => this.onMouseMove(e, picture)}>
                <img className='drag_image' src={picture.src}/>
                <CrossIcon className='cross_icon' onClick={() => this.props.deleteItem(picture)}/>
                <EditIcon className='edit_icon' onClick={() => this.props.openDetails(picture)}/>
                <div className='text_description' onClick={() => this.props.openDetails(picture)}>{picture.name}</div>
            </div>
    }
}

export default Card;
