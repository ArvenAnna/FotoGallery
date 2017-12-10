import React from 'react';
import styled from 'styled-components';
import {CrossIcon} from "./Icons";
import FileInput from "./FileInput";
import './addNewAlbum.less';

const Label = styled.span`
  width: 100%;
  margin-bottom: 0.25rem;
`

class AddNewAlbum extends React.Component {

    render() {
        return <div className='add_album'>
            <div className='add_album_modal'>
                <CrossIcon onClick={this.props.closeModal}/>
                <Label>Name</Label>
                <input/>
                <Label>Title image:</Label>
                <FileInput/>
                <Label>Description</Label>
                <textarea/>
                <button>ok</button>
            </div>
        </div>

    }
}

export default AddNewAlbum;