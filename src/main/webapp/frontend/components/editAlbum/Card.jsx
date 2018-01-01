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

    onCrossClick() {
        // show delete dialog
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
                   imgid={picture.id}
                   draggable={true}
                   onDoubleClick={this.props.openDetails}
                   onMouseDown={e => this.props.onMouseDown(e, picture)}
                   onMouseUp={e => this.props.onMouseUp(e, picture)}
                   onMouseMove={e => this.props.onMouseMove(e, picture)}>
                <img className='drag_image' src={picture.src}/>
                <CrossIcon className='cross_icon' onClick={this.props.deleteItem}/>
                <EditIcon className='edit_icon' onClick={this.props.openDetails}/>
            </div>
    }
}

export default Card;
