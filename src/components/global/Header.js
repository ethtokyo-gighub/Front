import styled from "styled-components";
import ImageLoader from "../utils/blocks/ImageLoader";
import Logo from "../../assets/image/img-header_logo.png";
import Spacer from "../utils/blocks/Spacer";
import SizeBox from "../utils/blocks/SizeBox";
import RoundBorderBtn from "./buttons/RoundBorderBtn";
import { ContentLoaded } from "../utils/actions/Animations";
import Arrow from "../../assets/icon/ic-right_arrow.png";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
    position: fixed;
    z-index: 9999;
    top: 0;

    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    background: linear-gradient(
        180deg,
        rgba(6, 6, 6, 0.6) 0%,
        rgba(6, 6, 6, 0) 100%
    );

    animation: ${ContentLoaded} 1s;
`;

const Inner = styled.div`
    width: 100%;
    max-width: 1180px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LogoContainer = styled.button`
    cursor: pointer;

    width: 108px;
    height: 22px;

    background-color: transparent;
`;

const HeaderItem = styled.div`
    cursor: pointer;

    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
`;

function Header({log}) {
    const navigator = useNavigate();
    return (
        <Container>
            <Inner>
                <LogoContainer onClick={() => {
                    navigator("/");
                }}>
                    <ImageLoader src={Logo} w={108} h={22} />
                </LogoContainer>

                <Spacer />
                <HeaderItem onClick={() => {
                    navigator("/borrow");
                }}>Borrow</HeaderItem>

                <SizeBox w={60} />
                <HeaderItem onClick={() => {
                    navigator("/pool");
                }}>Pool</HeaderItem>

                {/*<SizeBox w={60} />*/}
                {/*<HeaderItem onClick={() => {}}>Organization</HeaderItem>*/}

                <SizeBox w={60} />
                <SizeBox w={195} h={44}>
                    <RoundBorderBtn>
                        <div className={"row a-center j-center"}>
                            {log ? '0x6aF...36c5' : 'Connect Wallet'}

                            <SizeBox w={19}/>
                            <ImageLoader src={Arrow} w={24} h={24} />
                        </div>
                    </RoundBorderBtn>
                </SizeBox>
            </Inner>
        </Container>
    );
}

export default Header;
