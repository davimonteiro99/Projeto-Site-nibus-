// src/routes/Routes.jsx
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home/home";
import Sobre from '../pages/sobre/Sobre';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    );
}

export default AppRoutes;
