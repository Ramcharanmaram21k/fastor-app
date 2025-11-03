import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Otp from "./pages/Otp/Otp.jsx";
import RestaurantList from "./pages/ResturantList/RestaurantList.jsx";
import RestaurantDetail from "./pages/ResturantDetail/RestaurantDetail.jsx";
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/list" element={<RestaurantList />} />
                <Route path="/detail/:id" element={<RestaurantDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
