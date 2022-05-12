const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
  };
  
  const cart = (state = initialState, action) => {
    // reducer получает 2 параметра
  
    switch (action.type) {
      case "ADD_PIZZA_CART":
        return {
          ...state,
          items: {
              [action.payload.id]: [
                  ...state.items[action.payload.id],
                  action.payload
              ]
          }
          
        };
  
      default:
        return state;
    }
  };
  
  export default cart;
  