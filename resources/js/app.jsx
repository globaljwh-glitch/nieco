import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/core.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/category/:id" element={<CategoryPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
