
const initialState = {
    carts:[]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_TO_CART":
      
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1
      } else {
        const newItem = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, newItem]
        }
      }
    
    case "REMOVE_FROM_CART":
      const data = state.carts.filter((item) => item.id !== action.payload);
      return {
        ...state,
        carts: data
      }
    
      case "DECREASE_ITEM":
        const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);
      if (state.carts[itemIndex_dec].qnty >= 1) {
        state.carts[itemIndex_dec].qnty -= 1
        return {
          ...state,
          carts:[...state.carts]
        }
      } else if (state.carts[itemIndex_dec].qnty === 1){
        state.carts.filter((item) => item.id !== action.payload);
        const data = state.carts.filter((item) => item.id !== action.payload);
        return {
          ...state,
          carts: data
        }

      }

  default:
    return state
  }
}
