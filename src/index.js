import React from "react";
import ReactDOM from "react-dom/client";
import { Gallery } from "./components/Gallery";
import { Navigation } from "./components/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<>
    <Navigation />
    <Gallery />
</>)