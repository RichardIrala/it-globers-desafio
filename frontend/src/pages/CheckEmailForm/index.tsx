import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { api } from "helpers/api";
import { setEmail } from "reducers/userSlice";
import styles from "./index.css";
import LabelWithInput from "ui/LabelWithInput";
import { ButtonBlack } from "ui/Buttons";
import { Title } from "ui/Title";

const CheckEmailForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(event) {
    event.preventDefault();
    let $email = event.target["email"].value.trim();

    if (!Boolean($email)) {
      alert("Se requieren los campos completos");
      return;
    }

    // valida el email y devuelve un booleano
    if (!/\S+@\S+\.\S+/.test($email)) {
      alert("Necesitamos que ingreses un email válido");
      return;
    } else {
      let result = await api.authCheckEmail($email);

      switch (result.resjson.exist) {
        case true:
          dispatch(setEmail($email));
          navigate("/login");
          break;

        case false:
          dispatch(setEmail($email));
          navigate("/signup");
          break;

        default:
          alert("ocurrio un error");
      }
    }
  }

  return (
    <div className={styles.principalContainer}>
      <Title centred>Autenticación</Title>
      <form className={styles.form} onSubmit={handleSubmit}>
        <LabelWithInput
          inputName="email"
          inputType="email"
          placeholder="fulanito@ejemplo.com"
        >
          Email
        </LabelWithInput>
        <ButtonBlack type="submit">Siguiente</ButtonBlack>
      </form>
    </div>
  );
};

export default CheckEmailForm;
