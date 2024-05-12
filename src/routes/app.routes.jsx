import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import BuscaPata from "../pages/BuscaPata";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { PetRegister } from '../pages/PetRegister';
import { CompanyRegister } from '../pages/CompanyRegister';
import { Profile } from '../pages/Profile';
import { Dashboard } from '../pagesAdm/dashboard';
import { AboutPet } from '../pages/AboutPet';
import { EducaPet } from '../pages/EducaPet';


export function AppRoutes() {
    return (
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/petfinder" element={<BuscaPata />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/petregister" element={<PetRegister />} />
                <Route path="/companyregister" element={<CompanyRegister />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboardAdmin" element={<Dashboard/>} />
                <Route path="/aboutpet" element={<AboutPet/>}/>
                <Route path="/educapet" element={<EducaPet/>}/>
            </Routes>
    );
}

