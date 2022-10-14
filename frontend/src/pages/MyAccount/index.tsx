import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const userData = useSelector((state: any) => state.user);
  const { email } = userData;
  return (
    <div>
      <h1>estas logueado con: {email}</h1>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default MyAccount;
