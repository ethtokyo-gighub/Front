import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import X from "../../../assets/icon/ic-x.png";
import Spacer from "../../utils/blocks/Spacer";
import ImageLoader from "../../utils/blocks/ImageLoader";
import SizeBox from "../../utils/blocks/SizeBox";
import { COLORS } from "../../../styles/colors";
import { ReactComponent as CityNFT } from "../../../assets/image/img_city-nft.svg";
import { useState } from "react";
import { ReactComponent as Claim } from "../../../assets/image/img_claim-btn.svg";
import CircleLoading from "../CircleLoading";
import { ContentLoaded } from "../../utils/actions/Animations";

const BackBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 400px;
    height: 409px;

    background: #141414;
    border-radius: 16px;

    animation: ${ContentLoaded} 0.4s;
    animation-fill-mode: forwards;
`;

const XBtn = styled(ImageLoader)`
    cursor: pointer;

    width: 24px;
    height: 24px;
`;

const ClaimBtn = styled(Claim)`
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }
`;

function WalletModal({ setClaim, setModal, ...props }) {
    const [loading, setLoading] = useState(false);

    const claim = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 4000));
        setClaim(true);

        setLoading(false);
        setModal(false);
    };

    return (
        <ModalWrapper>
            <BackBoard>
                {loading ? (
                    <CircleLoading />
                ) : (
                    <>
                        <div className={"f-row"}>
                            <Spacer />
                            <XBtn
                                src={X}
                                w={30 * 0.65}
                                h={30 * 0.65}
                                onClick={() => setModal(false)}
                            />
                        </div>

                        <SizeBox h={14 * 0.65} />
                        <div className={"f-row a-center j-center"}>
                            You selected 1 proof of income NFTs
                        </div>

                        <SizeBox h={69 * 0.65} />
                        <div className={"f-row a-center j-center"}>
                            <CityNFT width={302 * 0.65} height={420 * 0.65} />
                        </div>

                        <SizeBox h={80 * 0.65} />
                        <div className={"f-row j-center"}>
                            <ClaimBtn
                                width={226 * 0.65}
                                height={65 * 0.65}
                                onClick={claim}
                            />
                        </div>
                    </>
                )}
            </BackBoard>
        </ModalWrapper>
    );
}

export default WalletModal;
