import styled from "styled-components";
import SizeBox from "../components/utils/blocks/SizeBox";
import {COLORS} from "../styles/colors";
import Divider from "../components/utils/blocks/Divider";
import {useState} from "react";
import BasicSquareBtn from "../components/global/buttons/BasicSquareBtn";
import {ContentLoaded} from "../components/utils/actions/Animations";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    width: 100%;
    height: 100%;
    max-width: 980px;

    animation: ${ContentLoaded} 1s;
`;

const H1 = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 49px;

    color: #FFFFFF;
`;

const H2 = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;

    color: ${COLORS.grey};
`;

const H3 = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: #FFFFFF;
`;

const H4 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;

    color: #FFFFFF;
`;

const H5 = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;

    color: #D3D3D3;
`;

const H6 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #FFFFFF;
`;

const ColorText = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;

    background: linear-gradient(274.65deg, #3D97D8 8.37%, #61E2B4 54.47%, #9FEB3F 77.77%, #FFDE60 100.74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Sub = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;

    color: #6B6B6B;
`;

const Tab = styled.div`
    cursor: pointer;

    width: 33%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: #FFFFFF;
`;

const Under = styled.div`
    width: 100%;
    height: 2px;

    background: ${props => props.on ? '#3D8DF5' : 'transparent'};
    border-radius: 2px;
`;

const Over = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: #FFFFFF;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    box-sizing: border-box;

    width: 980px;
    height: 97px;

    border: 1px solid #393939;
    border-radius: 16px;

    padding-left: 24px;
    padding-top: 10px;
`;

const InputText = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;

    color: #6B6B6B;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;

    text-underline: none;

    background-color: transparent;

    color: #FFFFFF;

    &&:focus {
        outline: none;
    }
`;

function Pool() {
    const [index, setIndex] = useState(0);
    const [deposit, setDeposit] = useState(0);

    return <Container>
        <SizeBox h={160}/>
        <H1>
            Pool
        </H1>

        <SizeBox h={40}/>
        <H2>
            GIG HUB POOL Information
        </H2>

        <SizeBox h={24}/>
        <div className={'f-row'}>
            <SizeBox w={150}>
                <div className={'all-f-row a-center'}>
                    <H3>
                        Reserved ETH
                    </H3>
                </div>
            </SizeBox>

            <SizeBox w={15}/>
            <H4>
                {deposit.toFixed(5)} ETH
            </H4>
        </div>

        <SizeBox h={16}/>
        <div className={'f-row'}>
            <SizeBox w={150}>
                <div className={'all-f-row a-center'}>
                    <H3>
                        Available ETH
                    </H3>
                </div>
            </SizeBox>

            <SizeBox w={15}/>
            <H4>
                {deposit.toFixed(5)} ETH
            </H4>
        </div>

        <SizeBox h={16}/>
        <div className={'f-row'}>
            <SizeBox w={150}>
                <div className={'all-f-row a-center'}>
                    <H3>
                        Total borrowed
                    </H3>
                </div>
            </SizeBox>

            <SizeBox w={15}/>
            <H4>
                0.00000 ETH
            </H4>
        </div>

        <SizeBox h={16}/>
        <div className={'f-row'}>
            <SizeBox w={150}>
                <div className={'all-f-row a-center'}>
                    <H3>
                        NFT Collateral
                    </H3>
                </div>
            </SizeBox>

            <SizeBox w={15}/>
            <H4>
                {deposit > 0 ? '1' : '0'}
            </H4>
        </div>

        <SizeBox h={38}/>
        <Divider thick={1} c={'#393939'}/>
        <SizeBox h={40}/>

        <div className={'f-row a-center'}>
            <H5>
                Deposit ETH
            </H5>

            <SizeBox w={17}/>
            <H6>
                APR
            </H6>

            <SizeBox w={8}/>
            <ColorText>
                0.00%
            </ColorText>
        </div>

        <SizeBox h={8}/>
        <Sub>
            Provide liquidity for borrowers by depositing into the Lend Pool.
        </Sub>

        <SizeBox h={40}/>
        <SizeBox w={270}>
            <div className={'f-column a-center j-center'}>
                <Tab onClick={() => setIndex(0)}>
                    Overview
                </Tab>
                <Under index={0} on={index == 0}/>
            </div>

            <div className={'f-column a-center j-center'}>
                <Tab onClick={() => setIndex(1)}>
                    Deposit
                </Tab>
                <Under index={1} on={index == 1}/>
            </div>

            <div className={'f-column a-center j-center'}>
                <Tab onClick={() => setIndex(2)}>
                    Withdraw
                </Tab>
                <Under index={2} on={index == 2}/>
            </div>
        </SizeBox>

        <SizeBox h={24}/>
        {
            index == 0 && <div className={'f-row'}>
                <SizeBox w={150}>
                    <div className={'all-f-column a-start'}>
                        <Over>
                            Current Deposit
                        </Over>

                        <SizeBox h={12}/>
                        <H4>
                            {deposit.toFixed(4)} ETH
                        </H4>
                    </div>
                </SizeBox>

                <SizeBox w={360}/>
                <SizeBox w={180}>
                    <div className={'all-f-column a-start'}>
                        <Over>
                            Claimable rewards
                        </Over>

                        <SizeBox h={12}/>
                        <H4>
                            --
                        </H4>
                    </div>
                </SizeBox>
            </div>
        }
        {
            index == 1 && <div className={'f-column a-end'}>
                <InputContainer>
                    <InputText>
                        Amount
                    </InputText>
                    <Input type={'text'} placeholder={'0.0000'}/>
                </InputContainer>

            <SizeBox h={50}/>
            <SizeBox w={210} h={52}>
                <BasicSquareBtn onClick={() => {
                    setDeposit(1000);
                    setIndex(0);
                }}>
                    Deposit
                </BasicSquareBtn>
            </SizeBox>

            </div>
        }
        {
            index == 2 && <div className={'f-column a-end'}>
                <InputContainer>
                    <InputText>
                        Amount
                    </InputText>
                    <Input type={'text'} value={deposit} placeholder={deposit.toFixed(4)}/>
                </InputContainer>

                <SizeBox h={50}/>
                <SizeBox w={210} h={52}>
                    <BasicSquareBtn onClick={() => {
                        setDeposit(0);
                        setIndex(0);
                    }}>
                        withdraw
                    </BasicSquareBtn>
                </SizeBox>

            </div>
        }
    </Container>;
}

export default Pool;