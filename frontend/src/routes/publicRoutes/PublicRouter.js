import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../../components/public/register/Register';
import Login from '../../components/public/login/Login';

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default PublicRouter;