import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/core.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/category/:slug" element={<CategoryPage />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
