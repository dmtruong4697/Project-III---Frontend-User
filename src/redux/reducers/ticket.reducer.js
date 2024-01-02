const initialState = {
    currentTicket: null,
  };
  
  const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_TICKET':
        return {
          ...state,
          currentTicket: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ticketReducer;
  