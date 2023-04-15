import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import SizeBox from "../../utils/blocks/SizeBox";
import BasicSquareBtn from "../buttons/BasicSquareBtn";

const Container = styled.div`
    width: ${props => `${props.w}px`};
    height: ${props => `${props.h}px`};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #141414;
    border-radius: 16px;
`;

const Desc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    
    color: #FFFFFF;
`;

function ConfirmModal({onClick, w, h, desc, confirm, modal, setModal, ...props}) {
    return <ModalWrapper>
        <Container w={w} h={h}>
            <Desc>
                {desc}
            </Desc>

            <SizeBox h={30}/>
            <SizeBox h={40} w={160}>
                <BasicSquareBtn onClick={onClick}>
                    {confirm}
                </BasicSquareBtn>
            </SizeBox>
        </Container>
    </ModalWrapper>;
}

export default ConfirmModal;