import React from 'react'
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {  Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
// 3 hot reload Встроенный в webpack механизм, который позволяет обновлять отдельные модули на клиенте, при их изменении на сервере без перезагрузки страницы.

const App = () => {
    
    return (
        <div className="wrapper">
            {/*4 передаем Header в отдельный кастомный еоспонент*/}
            <Header/>
            <div className="content">
                    {/* 36 передедаем весь контент и логику в Home.jsx */}
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                    {/* 39 Создаем компонент NotFoundBlock.jsx in components*/}
                </div>
        </div>
    );
};
export default App

// 42 импортируем верстку в pages / Cart.jsx
