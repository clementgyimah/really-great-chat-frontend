import styled from "styled-components"
import { IHeaderProps } from "../customTypes";
import { Col, Row } from "react-bootstrap"
import { Colors } from "../common";

export const Header = (props: IHeaderProps) => {
    const {headerHeight, currentUser} = props;
    return(
        <HeaderMainRow headerheight={headerHeight}>
            <HeaderBrandCol>Really Great Chat ({/*currentUser.name*/})</HeaderBrandCol>
        </HeaderMainRow>
    )
}


const HeaderMainRow = styled(Row)`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    width: 100%;
    height: ${props => props.headerheight}px;
    background-color: ${Colors.colorComb1.champagnePink};
`

const HeaderBrandCol = styled(Col)`
    margin-left: 50px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: ${Colors.colorComb1.ebony};
`
