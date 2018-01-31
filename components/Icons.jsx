import styled from 'styled-components';
import LeftArrow from '../svg/left-arrow.svg';
import RightArrow from '../svg/right-arrow.svg';
import Magnifier from '../svg/magnifier.svg';
import Cross from '../svg/cancel.svg';
import Edit from '../svg/edit.svg';
import Save from '../svg/save-file-option.svg';
import Rotate from '../svg/rotate-option.svg';
import Earth from '../svg/grid-world.svg';

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

export const MagnifierIcon = styled(Magnifier)`
   width: 3rem;
   height: 3rem;
   fill: rgba(255,255,255, 0.7);
`

export const CrossIcon = styled(Cross)`
   ${Icon}
`

export const EditIcon = styled(Edit)`
   ${Icon}
`

export const SaveIcon = styled(Save)`
   ${Icon}
`

export const RotateIcon = styled(Rotate)`
    ${Icon}
`

export const EarthIcon = styled(Earth)`
    ${Icon}
`