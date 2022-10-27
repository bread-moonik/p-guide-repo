import { RouteObject, Routes, Route } from 'react-router-dom';
import React from 'react';
import TestApp from "../pages/TestApp";
import IndexApp from "../pages/IndexApp";
import PublisherTemplate from "../pages/PublisherTemplate";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<IndexApp/>}></Route>
      <Route path='/TestApp' element={<TestApp/>}></Route>
      <Route path='/TestApp/template' element={<PublisherTemplate/>}></Route>
    </Routes>
  )
}

export default AppRoutes;