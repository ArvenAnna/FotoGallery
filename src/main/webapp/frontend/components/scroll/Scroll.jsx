import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
.cont{

    width: 200px;
    margin: 0 auto;
    height: 100px;
    overflow: hidden;
    color: white;
    position: relative;
    padding-right: 20px;
    }
    
    .text {
        position: relative;
    
    }
    
    .track {
        position: absolute;
        width: 20px;
        height: 100px;
        top: 0;
        right: 0;
        background-color: red;
  
        .scroll {
            position: relative;
            width: 20px;
            background-color: green;
            cursor: pointer;
        }
    }
}
`

class Scroll extends React.Component {

  constructor(props) {
    super(props);
    this.track = null;
    this.cont = null;
    this.text = null;
    this.scroll = null;
    this.state = {
     // scrollHeight: 0,
      currentScrollY: 0
    }
  }

  componentDidMount() {
    // this.setState({
    //     scrollHeight: this.calculateScrollHeight()
    // });
    //const scrollStyle = this.scroll.currentStyle || window.getComputedStyle(this.scroll);
  this.scroll.style.height = this.calculateScrollHeight();

  }

  calculateScrollHeight() {
    const container = this.cont;
    const text = this.text;
    if (!container || !text) return 0;
    const contRect = container.getBoundingClientRect();
    const textRect = container.getBoundingClientRect();

    return parseInt(contRect.height) * parseInt(contRect.height) / parseInt(textRect.height);
  }

  onWheel(e) {
    const textStyle = this.text.currentStyle || window.getComputedStyle(this.text);
    this.text.style.top = (parseInt(textStyle.top) + (e.deltaY > 0 ? 1 : -1)) + 'px';
  }

  onWheelWithSpeed(e, px) {

  }

  onDrag(e) {

    const scrollStyle = this.scroll.currentStyle || window.getComputedStyle(this.scroll);
    const trackStyle = this.track.currentStyle || window.getComputedStyle(this.track);


    if((parseInt(scrollStyle.top) - 1 < 0 && !this.isScrollDown(e)) || (parseInt(scrollStyle.top) + 1 > parseInt(trackStyle.height) && this.isScrollDown(e))) {
      return;
    }


    this.scroll.style.top = parseInt(scrollStyle.top) + (this.isScrollDown(e) ? 1 : -1) + 'px';

    this.setState({
      currentScrollY: e.clientY
    });


  }

  isScrollDown(e) {
    return e.clientY > this.state.currentScrollY;
  }

  render() {
    return (
      <Cont>
      <div className="cont" ref={node => this.cont = node}>
        <div className="text"
             onWheel={(e) => this.onWheel(e)}
             ref={node => this.text = node}>
          sadasj sakd j d sdaskd a sda k  sda sjhjhshhj tteqwtetwyet 7723 dqouweu we qweqweqyo  eqye qwe yqywueyqw yeyqw eg g fdgcs fggggggggggs jdhhhhhhhhhhhh ddddddddddd ddddddddddd dddddddddddd ddddddd dsjfhdhfsd hdjfd fsdgf d fd fgsd fgsdgf sdjf sjdfg dsfdshfgdsgkfgyru fjdgs  dsfl sdkfh lds flsa dfdklsfkjdhs f;sdk fsd f dasjdsjfuwewuiewiriewb</div>
        <div className="track" ref={node => this.track = node}>
          <div className="scroll"
               ref={node => this.scroll = node}
               draggable="true"
               onDrag={(e) => this.onDrag(e)}></div>
        </div>
      </div>
      </Cont>
    );
  }
}

export default Scroll;
