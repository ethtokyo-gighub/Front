import styled from "styled-components";
import SizeBox from "../components/utils/blocks/SizeBox";
import {COLORS} from "../styles/colors";
import Divider from "../components/utils/blocks/Divider";
import BasicSquareBtn from "../components/global/buttons/BasicSquareBtn";
import {useState} from "react";
import Pre from '../assets/image/img-prec-image.png';
import ImageLoader from "../components/utils/blocks/ImageLoader";
import ConfirmModal from "../components/global/modal/ConfirmModal";
import Please from '../assets/image/img-asdasd_back.png';
import Sleep from '../assets/image/img-asd.png';
import {ContentLoaded} from "../components/utils/actions/Animations";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    width: 100%;
    max-width: 1092px;
    height: 100%;
    
    animation: ${ContentLoaded} 1s;
`;

const H1 = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 49px;

    color: white;
`;

const H2 = styled.div`
    text-align: left;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: ${COLORS.grey};
`;

const H3 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: ${COLORS.white};
`;

const H3Bold = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: ${COLORS.white};
`;

const H3Bold2 = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    color: ${COLORS.white};
`;

const H4 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;

    color: ${COLORS.white};
`;

const SubTitle = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;

    color: white;
`;

const Input = styled.input`
    width: 364px;
    height: 58px;
    
    border-bottom: 1px solid ${COLORS.blue};
    background-color: transparent;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: ${COLORS.white};

    padding: 0px 225px 0px 0px;
    
    &&:focus {
        outline: none;
    }
`;

function Borrow() {
    const [page, setPage] = useState(false);
    const [modal, setModal] = useState(false);
    const [borrowOn, setBorrowOn] = useState(false);
    const [mode, setMode] = useState(true);

    return <Container>
        {
            page ? <ApplyLoan setPage={setPage} modal={modal} setModal={setModal} setBorrow={setBorrowOn}
                              mode={mode}/> : <>
                <SizeBox h={160}/>
                {borrowOn ? <>
                    <H1>
                        My paycheck loans
                    </H1>

                    <SizeBox h={80}/>
                    <SubTitle>
                        Total Borrowing Amounts
                    </SubTitle>

                    <SizeBox h={24}/>
                    <ImageLoader src={Please} w={1178} h={156}/>
                </> : <>
                    <H1>
                        Take payday loans
                    </H1>

                    <SizeBox h={16}/>
                    <H2>
                        Take out a immediate loan using your next paycheck as collateral.<br/>
                        The loan will be automatically repaid by your organization.
                    </H2>
                </>}

                {
                    borrowOn ? <>
                        <SizeBox h={100}/>
                        <SubTitle>
                            Next Paycheck Information
                        </SubTitle>
                        <SizeBox h={30}/>
                    </> : <SizeBox h={60}/>
                }
                <div className={'f-row'}>
                    <SizeBox w={273} h={102}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold>
                                test1
                            </H3Bold>
                        </div>
                    </SizeBox>
                    <SizeBox w={329} h={102}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold>
                                next paycheck date
                            </H3Bold>
                        </div>
                    </SizeBox>
                    <SizeBox w={328} h={102}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold>
                                next paycheck amount
                            </H3Bold>
                        </div>
                    </SizeBox>
                    <SizeBox w={159} h={102}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold>
                                take loan
                            </H3Bold>
                        </div>
                    </SizeBox>
                </div>
                <Divider thick={1} c={'rgba(255, 255, 255, 0.1)'}/>

                <ItemComponent set={setPage}/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>

                {
                    borrowOn ? <>
                        <SizeBox h={68}/>
                        <SubTitle>
                            Loan History
                        </SubTitle>
                        <SizeBox h={30}/>
                        <div className={'f-row'}>
                            <SizeBox w={273} h={102}>
                                <div className={'all-f-row a-center'}>
                                    <H3Bold>
                                        test1
                                    </H3Bold>
                                </div>
                            </SizeBox>
                            <SizeBox w={329} h={102}>
                                <div className={'all-f-row a-center'}>
                                    <H3Bold>
                                        next paycheck date
                                    </H3Bold>
                                </div>
                            </SizeBox>
                            <SizeBox w={328} h={102}>
                                <div className={'all-f-row a-center'}>
                                    <H3Bold>
                                        next paycheck amount
                                    </H3Bold>
                                </div>
                            </SizeBox>
                            <SizeBox w={159} h={102}>
                                <div className={'all-f-row a-center'}>
                                    <H3Bold>
                                        take loan
                                    </H3Bold>
                                </div>
                            </SizeBox>
                        </div>
                        <Divider thick={1} c={'rgba(255, 255, 255, 0.1)'}/>

                        <ItemComponent set={setPage} repay={true} click={() => {
                            setMode(false);
                            // setPage(false);
                            setBorrowOn(false);
                            // setMode(true);
                        }}/>
                    </> : <>
                    </>
                }
            </>
        }
    </Container>;
}

function ApplyLoan({setPage, modal, setModal, setBorrow, mode}) {
    return <>
        {modal && <ConfirmModal onClick={() => {
            if(mode) {
                setBorrow(true);
                setModal(false);
                setPage(false);
            } else {
                setModal(false);
                setPage(false);
                setBorrow(false);
            }
        }} w={460} h={234} modal={modal} confirm={'Go to dashboard'} desc={mode ? <>
            Loan execution completed.<br/> Your money on the way.</> : <>
            Repayment completed.
        </>} setModal={setModal}/>}
        <SizeBox h={160}/>
        <H1>
            {mode ? 'Apply for a loan' : 'Detailed Loan Information'}
        </H1>

        {
            mode ? <>
                <SizeBox h={61}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                Org title
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <H4>
                        lorem ipsum
                    </H4>
                </div>

                <SizeBox h={30}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                Next paycheck date
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <H4>
                        2023-04-30
                    </H4>
                </div>

                <SizeBox h={30}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                Next paycheck amount
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <H4>
                        2 ETH
                    </H4>
                </div>

                <SizeBox h={30}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                Max borrowing amount
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <H4>
                        1 ETH
                    </H4>
                </div>

                <SizeBox h={30}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                LTV
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <H4>
                        50%
                    </H4>
                </div>

                <SizeBox h={30}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                Interest rate
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <H4>
                        30%
                    </H4>
                </div>

                <SizeBox h={50}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                borrowing amount
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <Input/>
                    <SizeBox w={14}/>
                    <H4>
                        ETH
                    </H4>
                </div>

                <SizeBox h={80}/>
                <ImageLoader src={Pre} w={470} h={112}/>
            </> : <>
                <SizeBox h={61}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                Org title
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <H4>
                        lorem ipsum
                    </H4>
                </div>

                <SizeBox h={30}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                Repayment date
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <H4>
                        2023-04-30
                    </H4>
                </div>

                <SizeBox h={30}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                Borrowing  amount
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <H4>
                        1 ETH
                    </H4>
                </div>

                <SizeBox h={30}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                Cumulative Interest
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <H4>
                        0.0147532 ETH
                    </H4>
                </div>

                <SizeBox h={50}/>
                <div className={'f-row'}>
                    <SizeBox w={210}>
                        <div className={'all-f-row a-center'}>
                            <H3Bold2>
                                Repay amount
                            </H3Bold2>
                        </div>
                    </SizeBox>
                    <SizeBox w={60}/>
                    <Input/>
                    <SizeBox w={14}/>
                    <H4>
                        ETH
                    </H4>
                </div>

                <SizeBox h={80}/>
                <ImageLoader src={Sleep} w={631} h={86}/>
            </>
        }

        <SizeBox h={60}/>
        <div className={'f-row j-end a-center'}>
            <SizeBox w={210} h={52}>
                <BasicSquareBtn onClick={() => setPage(false)} mode={false}>
                    Go to list
                </BasicSquareBtn>
            </SizeBox>
            <SizeBox w={210} h={52}>
                <BasicSquareBtn onClick={() => setModal(true)}>
                    {!mode ? 'Repay' : 'Apply'}
                </BasicSquareBtn>
            </SizeBox>
        </div>
    </>;
}

function ItemComponent({set, repay, click}) {
    return <>
        <div className={'f-row'}>
            <SizeBox w={273} h={102}>
                <div className={'all-f-row a-center'}>
                    <H3>
                        test1
                    </H3>
                </div>
            </SizeBox>
            <SizeBox w={329} h={102}>
                <div className={'all-f-row a-center'}>
                    <H3>
                        2023-04-30
                    </H3>
                </div>
            </SizeBox>
            <SizeBox w={328} h={102}>
                <div className={'all-f-row a-center'}>
                    <H3>
                        1 ETH
                    </H3>
                </div>
            </SizeBox>
            <SizeBox w={159} h={102}>
                <div className={'all-f-row a-center'}>
                    <SizeBox w={152} h={43}>
                        <BasicSquareBtn onClick={() => {
                            if(repay) {
                                set(true);
                                click();
                            } else {
                                set(true);
                            }
                        }}>
                            {repay ? 'repay' : 'take loan'}
                        </BasicSquareBtn>
                    </SizeBox>
                </div>
            </SizeBox>
        </div>
        <Divider thick={1} c={'rgba(255, 255, 255, 0.1)'}/>
    </>;
}

export default Borrow;
