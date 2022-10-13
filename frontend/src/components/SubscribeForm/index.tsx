import React, { useState } from "react";
import styles from "./index.css";
import sendIcon from "/assets/sendIcon.png";
const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  function handleChange(event) {
    setEmail(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form: any = window.document.querySelector("." + styles.form);
    const data = new FormData(event.target);

    // Se chequea que no envien vacio el form
    if (email.trim() === "") {
      alert("El campo de email esta vacio.");
      return;
    }
    // valida el email y devuelve un booleano
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Necesitamos que ingreses un email válido");
      return;
    }

    try {
      const response = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Gracias por suscribirte!");
        form.reset();
      } else {
        alert("Oops! Hay un problema enviando tu formulario");
        console.error(response);
      }
    } catch (error) {
      alert("Ocurrió un problema con la llamada a la API");
      console.error(error.message);
    }
  }

  return (
    <form
      className={styles.form}
      action="https://formspree.io/f/mvoyqvzr"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className={styles.form__textContainer}>
        <p className={styles.form__newsLetter}>NEWSLETTER</p>
        <h4 className={styles.form__suscribite}>SUSCRIBITE </h4>
        <p className={styles.form__subEndText}>
          Y enterate de todas las novedades
        </p>
      </div>
      <label className={styles.form__label}>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          onChange={handleChange}
        />
        <button type="submit">
          <img src={sendIcon} alt="submitIcon" width={30} />
        </button>
      </label>
    </form>
  );
};

export default SubscribeForm;
