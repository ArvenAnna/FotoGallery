import React from 'react';
import styled from 'styled-components';

import LeftArrow from '../svg/left-arrow.svg';
import RightArrow from '../svg/right-arrow.svg';

const Icon = `
        width: 1rem;
        height: 1rem;
        fill: ${props => props.theme.text};
        
        &:hover {
            cursor: pointer;
            fill: ${props => props.theme.content};
        }
`

const LeftArrowIcon = styled(LeftArrow)`
  ${Icon}
`

const RightArrowIcon = styled(RightArrow)`
  ${Icon}
`

const Arrow = ({direction}) => {

    return (direction == "left") ? <LeftArrowIcon/> : <RightArrowIcon/>;

}

export default Arrow;