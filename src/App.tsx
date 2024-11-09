import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import CheckYourEmail from './Components/ForgetPassword/CheckYourEmail';
import SetNewPassword from './Components/ForgetPassword/SetNewPassword';
import PasswordReset from './Components/ForgetPassword/PasswordReset';
import Header from './CommonComponents/Header';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/CheckYourEmail" element={<CheckYourEmail />} />
          <Route path="/SetNewPassword" element={<SetNewPassword />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/SignUp" element={<SignUp />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
