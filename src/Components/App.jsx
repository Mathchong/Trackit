import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import TokenContext from "../contexts/TokenContext.js";
import ImageContext from "../contexts/ImageContext.js";
import PercentageContext from "../contexts/PercentageContext.js"
import ActivateContext from "../contexts/ActivateContext.js"

import LoginPage from "./LoginPage";
import CadastroPage from "./CadastroPage";
import HabitosPage from "./HabitosPage";
import HojePage from "./HojePage";
import HistoricoPage from "./HistoricoPage";
import ErroPage from "./ErroPage";
import Header from "./Header"
import Footer from "./Footer"

export default function App() {
    const [token, setToken] = useState('');
    const [image, setImage] = useState('');
    const [percentage, setPercentage] = useState(0);
    const [active, setActive] = useState(false);

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <ImageContext.Provider value={{ image, setImage }}>
                <PercentageContext.Provider value={{ percentage, setPercentage }}>
                    <ActivateContext.Provider value={{ active, setActive }}>
                        <BrowserRouter>
                            {active? <Header /> : <></> }
                            {active? <Footer /> : <></> }
                            <Routes>
                                <Route path='/' element={<LoginPage />} />
                                <Route path='/cadastro' element={<CadastroPage />} />
                                <Route path='/habitos' element={<HabitosPage />} />
                                <Route path='/hoje' element={<HojePage />} />
                                <Route path='/historico' element={<HistoricoPage />} />
                                <Route path='*' element={<ErroPage />} />
                            </Routes>
                        </BrowserRouter>
                    </ActivateContext.Provider>
                </PercentageContext.Provider>
            </ImageContext.Provider>
        </TokenContext.Provider>
    )
}