import { Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { Random } from "./Random";
import { Contact } from "./Contact";
import { Search } from "./Search";

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/random" element={<Random/>} />
        <Route path="/contact" element={<Contact />} />
    </Routes>

)