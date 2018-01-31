import React from 'react';
import {MagnifierIcon} from "../Icons";
import './fileInput.less';

class FileInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
    }

    onChange({target}) {
        this.setState({
            file: target.files[0]
        })
        this.props.uploadFile(target.files[0]);
    }

    render() {
        const classNames = this.props.className
            ? `file_input_wrapper ${this.props.className}`
            : 'file_input_wrapper';
        return <div className={classNames}>
            <button>{this.props.label}</button>
            <div className='file_input_area'>
                <MagnifierIcon className="magnify_icon"/>
            </div>
            <input type="file" disabled={this.props.disabled || false}
                   onChange={(e) => this.onChange(e)}/>
        </div>
    }
}

export default FileInput;
