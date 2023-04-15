import styled from "styled-components";
import {COLORS} from '../../../styles/colors'

const Container = styled.button`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background: ${props => props.bgColor};
    border: none;
    border-radius: 8px;
    box-sizing: border-box;

    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${COLORS.black};
`;

const Container2 = styled.button`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background: transparent;
    border: none;

    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    text-decoration-line: underline;
    color: white;
`;

function BasicSquareBtn({onClick, color = COLORS.blue, mode = true, ...props}) {
    return mode ? <Container onClick={onClick} bgColor={color}>{props.children}</Container> : <Container2 onClick={onClick}>{props.children}</Container2>;
}

export default BasicSquareBtn;
