import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import BuscaPata from "../pages/BuscaPata";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { PetRegister } from '../pages/PetRegister';
import { CompanyRegister } from '../pages/CompanyRegister';
import { Profile } from '../pages/Profile';
import { Dashboard } from '../pagesAdm/dashboard'
import { AboutPet } from '../pages/AboutPet';
import { EducaPet } from '../pages/EducaPet';
import { FormAdotante } from '../pages/FormAdotante';
import { FormsReview } from "../pagesAdm/FormsReview";
import { PostRegister } from '../pages/PostRegister';
import { PetsList } from '../pagesAdm/PetsList';
import { EducaPetReview } from '../pagesAdm/EducaPetReview';
import { SupportCentral } from '../pagesAdm/SupportCentral';
import { useEffect, useState } from 'react';
import { auth, db } from '../services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { NotFoundPage } from '../pages/404';
import { AboutPost } from '../pages/AboutPost';

export function AppRoutes() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                try {
                    const userDoc = await getDoc(doc(db, "users", user.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setIsAdmin(userData.admin === true);
                    }
                } catch (error) {
                    console.error("Erro ao obter dados do usuário:", error);
                }
            }
        };

        fetchUserData();
    }, []);
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/petfinder" element={<BuscaPata />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/petregister" element={<PetRegister />} />
            <Route path="/companyregister" element={<CompanyRegister />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/aboutpet/:id" element={<AboutPet />} /> 
            <Route path="/educapet" element={<EducaPet />} />
            <Route path='/formadotante' element={<FormAdotante />} />
            <Route path='/postregister' element={<PostRegister />} />
            <Route path='/aboutPost/:id' element={<AboutPost/>}/>
            

            <Route path="/dashboardAdmin" element={isAdmin ? <Dashboard /> : <NotFoundPage/>} />
            <Route path="/formsReview" element={isAdmin ? <FormsReview /> : <NotFoundPage/>} />
            <Route path="/petslist" element={isAdmin ? <PetsList /> : <NotFoundPage/>} />
            <Route path='/educapetreview' element={isAdmin ? <EducaPetReview /> : <NotFoundPage />}  />
            <Route path='/supportcentral' element={isAdmin ? <SupportCentral /> : <NotFoundPage/>} />
        </Routes>
    );
}
