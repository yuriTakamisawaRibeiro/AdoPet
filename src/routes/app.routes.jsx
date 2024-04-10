import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import PetFinder from "../pages/PetFinder";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { PetRegister } from '../pages/PetRegister';


export function AppRoutes() {
    return (
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/petfinder" element={<PetFinder />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/petregister" element={<PetRegister />} />
            </Routes>
    );
}

