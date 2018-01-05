import React from 'react';
import {CrossIcon} from "../Icons";
import './dialog.less';


class Dialog extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return <div className="Dialog">
                <CrossIcon className="cross" onClick={this.props.onClose}/>
                <div className="Dialog_text">{this.props.text}</div>
                <button className="Dialog_ok_button" onClick={this.props.onClick}>ok</button>
            </div>
    }
}

export default Dialog;
