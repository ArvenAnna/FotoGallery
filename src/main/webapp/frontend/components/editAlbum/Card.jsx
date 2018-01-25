import React from 'react';
import './editAlbum.less';
import {CrossIcon, EditIcon} from "../Icons";
import {isVideo} from "../../utils/index";
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-scale-multiple.scss';
import * as styles from "../../constants/styles";
import Alert from 'react-s-alert';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.replaceEvent = 'replace';
        this.state = {
            imageLoading: true,
            imageLoadStarted: false
        }
    }


    componentWillReceiveProps() {
        if (this.dragContainer && !this.replaceAttached) {
            this.replaceAttached = true;
            this.dragContainer.addEventListener(this.replaceEvent, e => this.replaceImage(e.target));
            document.body.addEventListener('mouseup', e => this.onUpBody(e));
        }
    }

    onUpBody(e) {
        const elementAtPoint = document.elementFromPoint(e.clientX + window.scrollX, e.clientY + window.scrollY)
            .parentElement;
        if (!elementAtPoint.classList.contains('drag_container')) {
            this.props.changeDragState({dragStarted: false, dragFrom: null, dragObj: null, dragFromEl: null});
        }
    }

    replaceImage(target) {
        const attr = target.getAttribute('imgid');
        const picture = this.props.pictures.find(p => p._id == attr);

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
        target.style.zIndex = 10;
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

        if(!dragFromEl) {
            return;
        }

        dragFromEl.style.top = '0px';
        dragFromEl.style.left = '0px';

        target.style.top = '0px';
        target.style.left = '0px';

        dragFromEl.style.zIndex = 0;

        if (picture == dragFrom) {
            const event = new Event(this.replaceEvent);
            const elementAtPoint = document.elementFromPoint(e.clientX + window.scrollX, e.clientY + window.scrollY)
                .parentElement;
            if (elementAtPoint.classList.contains('drag_container')) {
                elementAtPoint.dispatchEvent(event);
            } else {
                this.props.changeDragState({dragStarted: false, dragFrom: null, dragObj: null, dragFromEl: null});
            }

            return;
        }

        this.changePictureAndClear(picture);
    }

    changePictureAndClear(picture) {
        const {dragFrom, album} = this.props.dragState;

        const newPictures = [...album.images];

        const dragToPicture = album.images.find(p => p._id == picture._id);
       // editedPicture.order = prevOrder;
        const dragFromPicture = album.images.find(p => p._id == dragFrom._id);

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

    onImageLoad() {
        this.setState({imageLoading: false});
    }

    onImageError() {
        Alert.error("Image for name {" + this.props.picture.name + "} loading failed", {});
        this.setState({imageLoading: false});
    }

    loadImage(src) {
        this.setState({imageLoadStarted: true});
        const imageObj = new Image();
        imageObj.onload = this.onImageLoad.bind(this);
        imageObj.onerror = this.onImageError.bind(this);
        imageObj.src = src;
    }

    render() {
        const {picture, openPicture} = this.props;
        const {imageLoading, imageLoadStarted} = this.state;
        if (!imageLoadStarted && picture) this.loadImage(picture.src);
        return openPicture
            ? <div className='drag_container'
                   imgid={picture._id}>
                <img className='drag_image'
                     src={picture.src}
                     draggable={false}/>
            </div>
            : <div className='drag_container'
                   ref={r => this.dragContainer = r}
                   imgid={picture._id}
                   draggable={true}
                   onMouseDown={e => this.onMouseDown(e, picture)}
                   onMouseUp={e => this.onMouseUp(e, picture)}
                   onMouseMove={e => this.onMouseMove(e, picture)}>
                {imageLoading ? <Loader type="ball-scale-multiple"/> : isVideo(picture.src)
                    ? <video height={styles.picture_edit_height}
                             controls="controls"
                             className='drag_image'>
                    <source src={picture.src}/>
                </video>
                    : <img className='drag_image' src={picture.src}/>}
                <CrossIcon className='cross_icon' onClick={() => this.props.deleteItem(picture)}/>
                <EditIcon className='edit_icon' onClick={() => this.props.openDetails(picture)}/>
                <div className='text_description' onClick={() => this.props.openDetails(picture)}>{picture.name}</div>
            </div>
    }
}

export default Card;
