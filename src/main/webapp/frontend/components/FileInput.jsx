import React from 'react';
import styled from 'styled-components';
import {MagnifierIcon} from "./Icons";

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    
    input[type=file]{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform: scale(20);
        opacity: 0;
        cursor: pointer
    }
`

const VisibleWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`



class FileInput extends React.Component {
    render() {
        return <Wrapper className='file_input_wrapper'>
            <VisibleWrapper>
                <button>Choose main foto</button>
                <div className='file_input_area'>
                    <MagnifierIcon/>
                </div>
            </VisibleWrapper>
            <input type="file"/>
        </Wrapper>
    }
}

export default FileInput;
