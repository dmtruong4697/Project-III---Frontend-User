const initialState = {
  cart: [],
  totalFee: 0,
};

const calculateTotalFee = (cart) => {
  return cart.reduce((total, item) => total + item.quantity * item.price, 0);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingTicketIndex = state.cart.findIndex(
        item => item.name === action.payload.name
      );

      if (existingTicketIndex !== -1) {
        // Nếu ticket đã tồn tại trong giỏ hàng, cộng thêm 1 vào quantity
        const updatedCart = state.cart.map((item, index) =>
          index === existingTicketIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          cart: updatedCart,
          totalFee: calculateTotalFee(updatedCart),
        };
      } else {
        // Nếu ticket chưa tồn tại trong giỏ hàng, thêm mới vào giỏ hàng
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          totalFee: calculateTotalFee([...state.cart, { ...action.payload, quantity: 1 }]),
        };
      }

    case 'REMOVE_FROM_CART':
      const updatedCart = state.cart
        .map(item =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

      return {
        ...state,
        cart: updatedCart,
        totalFee: calculateTotalFee(updatedCart),
      };

    case 'RESET_CART':
      return {
        cart: [],
        totalFee: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
