import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import PetFinder from "../pages/PetFinder";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { PetRegister } from '../pages/PetRegister';
import { CompanyRegister } from '../pages/CompanyRegister';
import EducaPet from '../pages/EducaPet';


export function AppRoutes() {
    return (
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/petfinder" element={<PetFinder />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/petregister" element={<PetRegister />} />
                <Route path="/companyregister" element={<CompanyRegister />} />
                <Route path="/educapet" element={<EducaPet />} />
            </Routes>
    );
}

