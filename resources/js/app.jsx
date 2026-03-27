import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/core.css';

import './core.js';

import Home from './pages/Home';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import CodeOfConduct from "./pages/CodeOfConduct";
import Marketing from "./pages/Marketing";
import OrganizationChart from "./pages/OrganizationChart";
import Vision from "./pages/Vision";
import DedicatedCustomerService from "./pages/DedicatedCustomerService";
import FacilityAndLogistics from "./pages/FacilityAndLogistics";
import Sourcing from './pages/Sourcing';
import Strategies from './pages/Strategies';
import Partners from './pages/Partners';
import Technical from './pages/Technical';
import Events from './pages/Events';
import Careers from './pages/Careers';
import JobDetail from './pages/JobDetail';

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/category/:slug" element={<CategoryPage />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/code-of-conduct" element={<CodeOfConduct />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/organization-chart" element={<OrganizationChart />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/dedicated-customer-service" element={<DedicatedCustomerService />} />
                <Route path="/facility-and-logistics" element={<FacilityAndLogistics />} />
                <Route path="/sourcing" element={<Sourcing />} />
                <Route path="/strategies" element={<Strategies />} />
                <Route path="/partnerships" element={<Partners />} />
                <Route path="/technical-services" element={<Technical />} />
                <Route path="/media" element={<Events />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/job-detail/:id" element={<JobDetail />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
