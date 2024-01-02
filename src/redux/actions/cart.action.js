export const addToCart = (ticket) => ({
    type: 'ADD_TO_CART',
    payload: ticket,
});

export const resetCart = () => ({
    type: 'RESET_CART',
    //payload: ticket,
});

export const removeFromCart = (ticket) => ({
    type: 'REMOVE_FROM_CART',
    payload: ticket,
});