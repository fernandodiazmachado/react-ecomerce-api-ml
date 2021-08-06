const INIT_STATE = {
  cart: []
}

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type){
    case 'PUSH NEW PRODUCT':
        if (action.payload){
          //VALIDAR STOCK
          //VALIDAR OFERTA O CUPON
          console.log('existe payload');
        }
        
      return {
        ...state,
        cart:[...state.cart, action.payload]
      };
      default:
        return state;
  }
};