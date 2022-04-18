const initialState = {
    items: [],
    isLoaded: false,
  };
  
  const pizzas = (state = initialState, action) => { // reducer получает 2 параметра
    if (action.type === "SET_PIZZAS") {
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    }
    return state; 
  };
  
  export default pizzas;
  