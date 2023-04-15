import styled from "styled-components";
import SizeBox from "../components/utils/blocks/SizeBox";
import ImageLoader from "../components/utils/blocks/ImageLoader";
import {ReactComponent as MainText} from "../assets/image/img_text-logo.svg";
import {ReactComponent as SubText} from "../assets/image/img_text-sub-main.svg";
import {ReactComponent as Main} from "../assets/image/img_main-page.svg";
import {useNavigate} from "react-router-dom";
import {ContentLoaded} from "../components/utils/actions/Animations";
import Back from "../assets/image/img-landing_back_effect.png";
import {COLORS} from "../styles/colors";
import BasicSquareBtn from "../components/global/buttons/BasicSquareBtn";

const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 100%;
    max-width: 1180px;

    animation: ${ContentLoaded} 1s;
`;

const BackContainer = styled.div`
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;
    
    left: 0;
    top: 0;
`;

const H1Container = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 66px;
    line-height: 77px;

    color: ${COLORS.white};
`;

const H1Linear = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 66px;
    line-height: 77px;

    background: linear-gradient(274.65deg,
    #3d97d8 8.37%,
    #61e2b4 54.47%,
    #9feb3f 77.77%,
    #ffde60 100.74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const H2Container = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;

    color: ${COLORS.grey};
`;

function Lending({setLog}) {
    const navigate = useNavigate();

    function moveSignUp() {
        // navigate('/signup');
    }

    async function connectWallet() {
        setLog(true);
        navigate('/borrow');
    }

    return (
        <Container>
            <BackContainer>
                <ImageLoader src={Back} w={1180} h={900}/>
            </BackContainer>

            <SizeBox h={334}/>
            <H1Container>Financial Wellness for Workers in Web3</H1Container>

            <H1Linear>GIGHUB</H1Linear>

            <SizeBox h={26}/>
            <H2Container>
                Gighub is financial wellness platform for all the workers in
                web3.0.s
                <br/>
                We offer payday loan for workers who may not easy to access
                established financial service.
            </H2Container>

            <SizeBox h={100}/>
            <SizeBox w={172} h={52}>
                <BasicSquareBtn onClick={connectWallet}>Connect Wallet</BasicSquareBtn>
            </SizeBox>
        </Container>
    );
}

export default Lending;
