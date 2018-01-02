import React from 'react';
import './editAlbum.less';
import FileInput from "../fileInput/FileInput";
import {CrossIcon, SaveIcon} from "../Icons";
import Card from "./Card";

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
        const target = e.target.parentElement;
        const dragFrom = this.state.dragFrom;

        this.state.dragFromEl.style.top = '0px';
        this.state.dragFromEl.style.left = '0px';

        target.style.top = '0px';
        target.style.left = '0px';

        this.state.dragFromEl.style.zIndex = 0;

        if(picture == this.state.dragFrom) {
            const event = new Event('replace');
            document.elementFromPoint(e.clientX + window.scrollX, e.clientY + window.scrollY)
                .parentElement
                .dispatchEvent(event);
            return;
        }

        this.setState({dragStarted: false, dragFrom:null, dragObj:null, dragFromEl:null});
        const prevOrder = dragFrom.order;
        dragFrom.order = picture.order;
        picture.order = prevOrder;

    }

    openDetails() {
        this.setState({
            isTextOpen: true
        });
    }

    onCrossClick() {
        this.setState({
            isTextOpen: false
        })
    }

    deleteItem() {

    }

    changeDragState(obj) {
        this.setState(obj);
    }

    render() {
        const {isTextOpen} = this.state;
        return (
            <div className='edit_container'>
                {this.pictures.sort((x,y) => x.order-y.order).map(p => <Card
                    key={p.id}
                    picture={p}
                    onMouseUp={e => this.onMouseUp(e, p)}
                    onMouseMove={e => this.onMouseMove(e, p)}
                    openDetails={() => this.openDetails()}
                    deleteItem={() => this.deleteItem()}
                    replaceImage={(target) => this.replaceImage(target)}
                    isTextOpen={isTextOpen}
                    changeDragState={(obj) => this.changeDragState(obj)}
                    dragState={this.state}
                />)}
                <FileInput className='new_image' disabled={isTextOpen}/>
                {isTextOpen &&
                <div className='new_text' ref={t => this.text = t}>
                    <input/>
                    <textarea/>
                    <SaveIcon className='save_icon'/>
                    <CrossIcon className='cross_icon' onClick={() => this.onCrossClick()}/>
                </div>}

            </div>
        );
    }
}

export default EditAlbum;
