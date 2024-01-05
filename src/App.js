import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import { Route, Routes } from "react-router-dom";

import { Gallery } from "./components/Gallery";
import { Navigation } from "./components/Navigation"
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { NoticePolicy } from "./components/NoticePolicy";
import { ContactUs } from "./components/ContactUs";

export function App() {
    return(
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={ <Gallery /> }/>
                <Route path="/services" element={ <Services /> }/>
                <Route path="/about-us" element={<AboutUs />}/>
                <Route path="/privacy-notice" element={<NoticePolicy /> }/>
                <Route path="/contact-us" element={<ContactUs />}/>
            </Routes>
            <Footer />
        </>
    )
}