export const initialState = {
  items: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1
        };
        return { ...state, items: newItems };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }
    case 'REMOVE_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        const newItems = [...state.items];
        if (newItems[existingItemIndex].quantity > 1) {
          newItems[existingItemIndex] = {
            ...newItems[existingItemIndex],
            quantity: newItems[existingItemIndex].quantity - 1
          };
          return { ...state, items: newItems };
        } else {
          return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload.id)
          };
        }
      }
      return state;
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};
