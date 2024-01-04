import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Route, Routes } from "react-router-dom";

import { Gallery } from "./components/Gallery";
import { Navigation } from "./components/Navigation"
import { Services } from "./components/Services";

export function App() {
    return(
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={ <Gallery /> }/>
                <Route path="/services" element={ <Services /> }/>
            </Routes>
        </div>
    )
}