import styled from 'styled-components';
import {Col} from 'react-bootstrap';
import { ISideBarProps } from "../customTypes";
import { Colors } from '../common';

export const SideBar = (props: ISideBarProps) => {
    const {headerHeight, sideBarWidth} = props;
    return(
        <SideBarContainerCol headerheight={headerHeight} sidebarwidth={sideBarWidth}>
            <HeadingCol>Users Online</HeadingCol>
        </SideBarContainerCol>
    )
}

const SideBarContainerCol = styled(Col)`
    position: fixed;
    width: ${props => props.sidebarwidth}px;
    height: 100%;
    left: 0px;
    top: ${props => props.headerheight}px;
    background-color: ${Colors.whiteComb.whiteAlpha1};
    border-right: 1px solid ${Colors.colorComb1.ebony};
`

const HeadingCol = styled(Col)`
    margin: 10px 20px 10px 20px;
    font-size: 18px;
    font-weight: bold;
    color: ${Colors.colorComb1.ebony}
`;
