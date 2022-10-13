import React from "react";
import { useSelector } from "react-redux";
const MyAccount = () => {
  const userData = useSelector((state: any) => state.user);
  const { email } = userData;
  return <div>estas logueado con: {email}</div>;
};

export default MyAccount;
