import React from "react";
import {MagnifierIcon} from "../Icons";
import "./picture.less";
import Preview from "./Preview";
import {isVideo} from "../../utils/index";
import * as styles from "../../constants/styles";

class Picture extends React.Component {
    // animation: fade, move

    constructor(props) {
        super(props);

        this.state = {
            magnify: '',
            valid: true
        };
    }

    click() {
        this.setState({
            magnify: 'magnify',
            animation: ''
        });
    };

    closePreview() {
        this.setState({
            magnify: ''
        });
    }

    mouseLeave(e) {
        !this.state.magnify && this.chooseAnimation(e, 'fade_out', 'from');
    };

    mouseEnter(e) {
        !this.state.magnify && this.chooseAnimation(e, 'fade_in', 'to');
    };

    chooseAnimation(e, fade, move) {
        switch (this.props.animation) {
            case 'fade':
                this.setState({
                    animation: fade
                });
                break;
            case 'move':
                this.setState({
                    animation: this.findSide(e, move)
                });
        }
    }

    findSide(e, direction) {
        const clientRect = e.target.getClientRects()[0];
        const diffs = [
            {
                side: `move_${direction}_right`,
                diff: Math.abs(e.clientX - clientRect.left)
            }, {
                side: `move_${direction}_left`,
                diff: Math.abs(e.clientX - clientRect.right)
            }, {
                side: `move_${direction}_bottom`,
                diff: Math.abs(e.clientY - clientRect.top)
            }, {
                side: `move_${direction}_top`,
                diff: Math.abs(e.clientY - clientRect.bottom)
            }
        ];

        const minDiff = Math.min(...Array.from(diffs, el => el.diff));
        return diffs.find(el => el.diff == minDiff).side;
    }

    handleBrokenImg(e) {
        this.setState({
            valid: false
        })
    }

    render() {
        const {album} = this.props;
        const main = album.images[0];
        const {animation, magnify} = this.state;
        return this.state.valid && <div>
                <div
                    className={`image_wrapper ${animation} ${magnify}`}
                    onMouseLeave={(e) => this.mouseLeave(e)}
                    onMouseEnter={(e) => this.mouseEnter(e)}
                    onClick={(e) => this.click(e)}
                >
                    {isVideo(main.src)
                        ? <video height={styles.picture_height}
                                 controls="controls">
                        <source src={main.src}/>
                    </video>
                        : <img className='image'
                         onError={(e) => this.handleBrokenImg(e)}
                         src={main.src}
                         alt="something wrong happens"/>}
                    <div className={'overlay'}>
                        <div className={`overlay_top`}>
                            <MagnifierIcon/>
                        </div>
                        <div className={`overlay_bottom`}>
                            <div className='overlay_bottom_text'>{album.name}</div>
                        </div>
                    </div>
                </div>
                {magnify &&
                <Preview main={main}
                         close={() => this.closePreview()}
                         editRoute={`/edit/${album._id}`}
                         images={album.images}/>}
            </div>;
    }
}

export default Picture;