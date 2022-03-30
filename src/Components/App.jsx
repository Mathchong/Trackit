import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import CadastroPage from "./CadastroPage";
import HabitosPage from "./HabitosPage";
import HojePage from "./HojePage";
import HistoricoPage from "./HistoricoPage";
import ErroPage from "./ErroPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<LoginPage />} />
                <Route path='/cadastro' element={<CadastroPage />} />
                <Route path='/habitos' element={<HabitosPage />} />
                <Route path='/hoje' element={<HojePage />} />
                <Route path='/historico' element={<HistoricoPage />} />
                <Route path='*' element={<ErroPage />} />
            </Routes>
        </BrowserRouter>
    )
}