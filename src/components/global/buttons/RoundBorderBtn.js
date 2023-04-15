import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

const Container = styled.div`
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    color: ${COLORS.white};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    padding: 10px 16px 10px 24px;
    gap: 10px;

    border-radius: 30px;
    border: ${COLORS.white} solid 1px;
`;

function RoundBorderBtn({ size, color, onClick, ...props }) {
    return <Container onClick={onClick}>{props.children}</Container>;
}

export default RoundBorderBtn;
