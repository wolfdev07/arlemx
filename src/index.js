import React from "react";
import ReactDOM from "react-dom/client";
import { Greetings } from "./components/Greetings";
import { Navbar } from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/js/dist/dropdown'

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<>
    <Navbar />
    <Greetings />
</>)