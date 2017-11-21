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

export const LeftArrowIcon = styled(LeftArrow)`
  ${Icon}
`

export const RightArrowIcon = styled(RightArrow)`
  ${Icon}
`