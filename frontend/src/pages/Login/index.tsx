import { api } from "helpers/api";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "reducers/userSlice";
import { ButtonBlack } from "ui/Buttons";
import LabelWithInput from "ui/LabelWithInput";
import { Title } from "ui/Title";
import styles from "./index.css";

const Login = () => {
  const userState = useSelector((state: any) => state.user);
  let { email } = userState;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function loginOnSubmit(event) {
    event.preventDefault();
    let $password = event.target["password"].value.trim();

    if (!$password || !email) {
      alert("Se requieren los campos completos");
    } else {
      let result = await api.authLogin(email, $password);

      if (!result.resjson.token) {
        alert("contraseña incorrecta");
      } else {
        console.log(result.resjson.token, "SOY EL TOKEN S ESUPONE");
        dispatch(setToken(result.resjson.token));
        navigate("/");
      }
    }
  }
  return (
    <div className={styles.principalContainer}>
      <Title centred>Autenticación</Title>
      <form className={styles.form} onSubmit={loginOnSubmit}>
        <LabelWithInput
          inputName="password"
          autocomplete="off"
          inputType="password"
        >
          Contraseña
        </LabelWithInput>
        <ButtonBlack type="submit">Confirmar</ButtonBlack>
      </form>
    </div>
  );
};

export default Login;
