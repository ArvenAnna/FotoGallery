import React from "react";
import {MagnifierIcon} from "../Icons";
import "./picture.less";
import Preview from "./Preview";
import {isVideo} from "../../utils/index";
import Loader from 'react-loaders';
import * as styles from "../../constants/styles";
import 'loaders.css/src/animations/ball-scale-multiple.scss';
import Alert from 'react-s-alert';

class Picture extends React.Component {
    // animation: fade, move

    constructor(props) {
        super(props);
        this.imageLoadStarted = false;

        this.state = {
            magnify: '',
            valid: true,
            loading: true,
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

    handleBrokenImg() {
        Alert.error("Image for name {" + this.props.album.images[0].name + "} loading failed", {});
        this.imageLoadStarted = true;
        this.setState({
            loading: false,
            valid: false
        })
    }

    onLoad() {
        this.imageLoadStarted = true;
        this.setState({loading: false});
    }

    loadImage(url) {
        let image = new Image();
        image.onload = this.onLoad.bind(this);
        image.onerror = this.handleBrokenImg.bind(this);
        image.src = url;
    }

    render() {
        const {album} = this.props;
        const main = album.images[0];
        const {animation, magnify, loading} = this.state;
        if (!this.imageLoadStarted && !isVideo(main.src)) this.loadImage(main.src);

        return this.state.valid && <div className="image_main_wrapper">
                <div
                    className={`image_wrapper ${animation} ${magnify}`}
                    onMouseLeave={(e) => this.mouseLeave(e)}
                    onMouseEnter={(e) => this.mouseEnter(e)}
                    onClick={(e) => this.click(e)}
                >
                    {(loading && !isVideo(main.src))
                        ? <Loader type="ball-scale-multiple" className="image_loader"/>
                        : isVideo(main.src)
                            ? <video height={styles.picture_height}
                                     width={styles.picture_width}
                                     onError={(e) => this.handleBrokenImg(e)}
                                     onLoadedMetadata={(e) => this.onLoad(e)}
                                     className="video">
                                <source src={main.src}/>
                            </video>
                            : <img className='image'
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
                {magnify && [<div key="preview_overlay" className="preview_overlay"/>,
                <Preview main={main}
                         key="preview"
                         close={() => this.closePreview()}
                         editRoute={`/edit/${album._id}`}
                         images={album.images}/>]}
            </div>;
    }
}

export default Picture;

