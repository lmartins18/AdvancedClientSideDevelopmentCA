import { Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { Random } from "./Random";
import { Contact } from "./Contact";


export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/random" element={<Random/>} />
        <Route path="/contact" element={<Contact />} />
    </Routes>

)