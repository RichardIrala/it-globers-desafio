// Esto esta siendo preparado para utilizar luego... Al finalizar el desafío vere si aplico esta lógica para los actions
const algunReducer = (state, action) => {
  switch (action.type) {
    case "@comer":
      console.log("COMEEER");
      break;
    case "@dormir":
      console.log("DORMIRRRR");
      break;
    default:
      console.log("DEFAULT");
  }
};
