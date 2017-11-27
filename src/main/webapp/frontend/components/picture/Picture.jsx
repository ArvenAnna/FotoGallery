import React from 'react';
import styled from 'styled-components';
import {MagnifierIcon} from "../Icons";
import './picture.less';

// const ImageWrapper = styled.div`
//
//   &:hover > .move_to_right {
//       animation-name: move_to_right;
//       animation-duration: 0.5s;
//       animation-timing-function: ease;
//   }
//
//   &:hover > .move_to_left {
//       animation-name: move_to_left;
//       animation-duration: 0.5s;
//       animation-timing-function: ease;
//   }
//
//   &:hover > .move_to_top {
//       animation-name: move_to_top;
//       animation-duration: 0.5s;
//       animation-timing-function: ease;
//   }
//
//   &:hover > .move_to_bottom {
//       animation-name: move_to_bottom;
//       animation-duration: 0.5s;
//       animation-timing-function: ease;
//   }
//
//
//   .overlay {
//
//     .overlay_top {
//
//        &.fade_out {
//             animation-name: fade_out_base;
//             animation-duration: 4s;
//             animation-timing-function: ease;
//         }
//
//         &.fade_out > svg {
//             animation-name: fade_out_icon;
//             animation-duration: 2s;
//             animation-timing-function: ease;
//         }
//     }
//
//     .overlay_bottom {
//
//       &.fade_out {
//         animation-name: fade_out_bottom;
//         animation-duration: 2s;
//         animation-timing-function: ease;
//       }
//     }
//   }
// `

class Picture extends React.Component {
    // animation: fade, move_to

    constructor(props) {
        super(props);

        this.state = {
            animation: ''
        };
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);

    }

    mouseLeave(e) {
        if (this.props.animation === 'fade') {
            this.setState({
                animation: 'fade_out'
            });
            return;
        }
    }

    mouseEnter(e) {
        if (this.props.animation === 'fade') {
            this.setState({
               animation: 'fade_in'
            });
            return;
        }

        const clientRect = e.target.getClientRects()[0];
        const x = e.clientX;
        const y = e.clientY;
        const diffs = [
            {
                side: 'move_to_right',
                diff: Math.abs(x - clientRect.left)
            }, {
                side: 'move_to_left',
                diff: Math.abs(x - clientRect.right)
            }, {
                side: 'move_to_bottom',
                diff: Math.abs(y - clientRect.top)
            }, {
                side: 'move_to_top',
                diff: Math.abs(y - clientRect.bottom)
            }
        ];

        const minDiff = Math.min( ...Array.from(diffs, el => el.diff));
        const side = diffs.find(el => el.diff == minDiff).side;
        console.log(side);

        this.setState({
            animation: side
        });
    }

    render () {
        const {src} = this.props;
        const {animation} = this.state;
        return (
                <div
                    className={`image_wrapper ${animation}`}
                    onMouseLeave={this.mouseLeave}
                    onMouseEnter={this.mouseEnter}>
                    <img src={src}/>
                    <div className={'overlay ${animation}'}>
                        <div className={`overlay_top`}>
                            <MagnifierIcon/>
                        </div>
                        <div className={`overlay_bottom`}>
                            <span className='overlay_bottom_text'>some beautiful picture</span>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Picture;