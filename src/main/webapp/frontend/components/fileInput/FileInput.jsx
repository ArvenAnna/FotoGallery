import React from 'react';
import {MagnifierIcon} from "../Icons";
import './fileInput.less';

class FileInput extends React.Component {

    render() {
        return <div className='file_input_wrapper'>
            <button>{this.props.label}</button>
            <div className='file_input_area'>
                <MagnifierIcon/>
            </div>
            <input type="file" disabled={this.props.disabled || false}/>
        </div>
    }
}

export default FileInput;
