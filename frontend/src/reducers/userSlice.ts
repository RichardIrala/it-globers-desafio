import { createSlice } from "@reduxjs/toolkit";
import { persistReduxState } from "helpers/persistReduxState";
const userState = JSON.parse(localStorage.getItem("prueba"));

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: userState?.token ?? "",
    email: userState?.email ?? "",
  },
  reducers: {
    setToken: (state, action: any) => {
      // action es el segundo parámetro, trae el type (accion a efectuar en este caso user/setToken) y el payload (dato a setear)
      console.log(action);

      state.token = action.payload;

      //   Con esto persisto el estado. El persist lo cree a mano
      persistReduxState("prueba", { ...state, token: action.payload });
      //   Esto me permite ver el cambio en tiempo real en consola
      const userData = localStorage.getItem("prueba");
      console.log(userData);
    },
    setEmail: (state, action: any) => {
      state.email = action.payload;
      persistReduxState("prueba", { ...state, email: action.payload });
      const userData = localStorage.getItem("prueba");
      console.log(userData);
    },
  },
});

// Los creadores de acciones se generan para cada función de reducción de casos.
export const { setToken, setEmail } = userSlice.actions;

export default userSlice.reducer;
