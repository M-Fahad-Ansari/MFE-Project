import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeContent from "./HomeContent";
import PDPContent from "./PDPContent";

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/product' element={<Navigate to='/product/1' />}></Route>
        <Route path='/product/:id' element={<PDPContent />}></Route>
        <Route path='/' element={<HomeContent />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainLayout;
