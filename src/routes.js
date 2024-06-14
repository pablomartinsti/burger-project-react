import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/home"
import Order from "./container/order"

function MyRoutes(){

    return (
        <Router>
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/pedido" element={<Order/>} />

            </Routes>



        </Router>
    )

}

export default MyRoutes