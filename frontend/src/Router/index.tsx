import Homepage from "pages/Homepage";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "pages/Login";
import CheckEmailForm from "pages/CheckEmailForm";
import SignUp from "pages/SignUp";
import MyAccount from "pages/MyAccount";
import { useSelector } from "react-redux";
export const AppRoutes = () => {
  const userData = useSelector((state: any) => state.user);

  const { token } = userData;
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/checkEmail" element={<CheckEmailForm />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route
        path="/my-account"
        element={
          !Boolean(token) ? <Navigate to={"/checkEmail"} /> : <MyAccount />
        }
      ></Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
