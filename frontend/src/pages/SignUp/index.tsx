import React, { FormEvent } from "react";
import styles from "./index.css";
import { api } from "helpers/api";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LabelWithInput from "ui/LabelWithInput";
import { setToken } from "reducers/userSlice";
import { ButtonBlack } from "ui/Buttons";
import { Title } from "ui/Title";

const SignUp = () => {
  const userData = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { email } = userData;

  async function registerOnSubmit(event) {
    event.preventDefault();
    let $password = event.target["password"].value.trim();
    let $repeated_password = event.target["repeated_password"].value.trim();
    let $name = event.target["name"].value.trim();

    if ($password != $repeated_password) {
      alert("Las contraseñas no son idénticas");
    } else if (!$password || !email || !$name) {
      alert("Se requieren los campos completos");
    } else {
      let registerRes = await api.authRegister(email, $password, $name);

      if (!registerRes.resjson.email) {
        alert(registerRes.resjson.message);
        return;
      }
      const result = await api.authLogin(email, $password);

      if (!result.resjson.token) {
        alert("Habrá un bug? Lo averiguraremos... (?");
        navigate("/login");
      } else {
        dispatch(setToken(result.resjson.token));
        navigate("/welcome");
      }
    }
  }

  return (
    <div className={styles.principalContainer}>
      <Title centred>Registrate</Title>
      <form className={styles.form} onSubmit={registerOnSubmit}>
        <LabelWithInput inputName="name" placeholder="fulanito">
          Nombre
        </LabelWithInput>
        <div className={styles.passwords_container}>
          <LabelWithInput
            inputName="password"
            autocomplete="off"
            inputType="password"
          >
            Contraseña
          </LabelWithInput>
          <LabelWithInput
            inputName="repeated_password"
            autocomplete="off"
            inputType="password"
          >
            Repetir contraseña
          </LabelWithInput>
        </div>
        <ButtonBlack type="submit">Registrarse</ButtonBlack>
      </form>
    </div>
  );
};

export default SignUp;
