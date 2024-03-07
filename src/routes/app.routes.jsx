import { Routes, Route } from 'react-router-dom'

import SignUp from "../pages/SignUp"
import Login from "../pages/Login"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        </Routes>
            
            )
        }