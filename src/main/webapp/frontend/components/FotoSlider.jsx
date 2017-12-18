import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import AddNewAlbum from "./AddNewAlbum";
import AlbumContainer from "./AlbumContainer";
import Scroll from "./scroll/Scroll";

const Page = styled.div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
   font-size:2rem;
`

const Content = styled.div`
    background-color: black;
`

class FotoSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addAlbumModal: false
        }
    }

    createAlbum() {
        this.setState({
            addAlbumModal: true
        });
    }

    closeModal() {
        this.setState({
            addAlbumModal: false
        });
    }

    render() {
        return (
        <Page>
            <Scroll height='100px' width='200px'>
                <div>
                    sadasj sakd j d sdaskd a sda k sda sjhjhshhj tteqwtetwyet 7723 dqouweu we qweqweqyo eqye qwe
                    yqywueyqw yeyqw eg g fdgcs fggggggggggs jdhhhhhhhhhhhh ddddddddddd ddddddddddd dddddddddddd
                    ddddddd dsjfhdhfsd hdjfd fsdgf d fd fgsd fgsdgf sdjf sjdfg dsfdshfgdsgkfgyru fjdgs dsfl sdkfh
                    lds flsa dfdklsfkjdhs f;sdk fsd f dasjdsjfuwewuiewiriewb
                </div>
                {/*<Page>*/}
                {/*{this.state.addAlbumModal && <AddNewAlbum closeModal={() => this.closeModal()}/>}*/}
                {/*<Content>*/}
                {/*<Header createAlbum={() => this.createAlbum()}/>*/}
                {/*<AlbumContainer/>*/}
                {/*</Content>*/}
                {/*</Page>*/}
            </Scroll>
        </Page>

        );
    }
}

export default FotoSlider;