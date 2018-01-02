/**
 * Created by Anna on 12/31/2017.
 */
import React from 'react';
import './editAlbum.less';
import {CrossIcon, EditIcon} from "../Icons";

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps() {
        if (this.dragContainer && !this.replaceAttached) {
            this.replaceAttached = true;
            this.dragContainer.addEventListener('replace', (e)=>this.props.replaceImage(e.target));
        }
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
        this.props.changeDragState({dragStarted: true, dragFrom:picture, dragObj, dragFromEl: target});
        target.style.zIndex = 10;
    }

    onMouseMove(e, picture) {
        e.preventDefault();
        const {dragFrom, dragStarted, dragObj} = this.props.dragState;
        const target = e.target.parentElement;
        if(dragStarted && dragFrom == picture) {
            const x = e.clientX + window.scrollX;
            const y = e.clientY + window.scrollY;
            target.style.top = (dragObj.elStartTop + y - dragObj.y) + 'px';
            target.style.left = (dragObj.elStartLeft + x - dragObj.x) + 'px';
        }
    }

    render() {
        const {picture, isTextOpen} = this.props;
        return isTextOpen
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
                   onDoubleClick={this.props.openDetails}
                   onMouseDown={e => this.onMouseDown(e, picture)}
                   onMouseUp={e => this.props.onMouseUp(e, picture)}
                   onMouseMove={e => this.onMouseMove(e, picture)}>
                <img className='drag_image' src={picture.src}/>
                <CrossIcon className='cross_icon' onClick={this.props.deleteItem}/>
                <EditIcon className='edit_icon' onClick={this.props.openDetails}/>
            </div>
    }
}

export default Card;
