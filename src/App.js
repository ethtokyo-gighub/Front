import './App.css';
import {useEffect, useState} from "react";
import ScrollToTop from "./components/utils/actions/ScrollTop";
import {Navigate, Route, Router, Routes} from "react-router-dom";
import Lending from "./pages/Lending";
import {createGlobalStyle} from "styled-components";
import SizeBox from "./components/utils/blocks/SizeBox";
import Header from './components/global/Header';
import Borrow from "./pages/Borrow";
import Pool from "./pages/Pool";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: Roboto;
    }
`;

function App() {
    const [loading, setLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [userType, setUserType] = useState(1);

    const [account, setAccount] = useState();
    const [web3, setWeb3] = useState();

    // useEffect(() => {
    //     setLoading(true);
    //     // Token Verify
    //     setIsLogged(true);
    //     setLoading(false);
    // }, []);

    if (loading) {
        return (<div className={'App'}>
            ... Loading
        </div>);
    }

    return (
        <div className={'App'}>
            {/* Currently, this is demo mode. <br/>
            Within a week, we plan to connect and make it available for testing on<br/>
            the Goerli testnet and other various layers. */}
            <ScrollToTop/>
            <GlobalStyle/>
            <Header log={isLogged}/>
            <Routes>
                <Route exact path="/" element={<Lending setLog={setIsLogged}/>}/>
                <Route exact path="/borrow" element={<Borrow/>}/>
                <Route exact path="/pool" element={<Pool/>}/>
            </Routes>

            <SizeBox h={120}/>
        </div>
    );
}

export default App;
