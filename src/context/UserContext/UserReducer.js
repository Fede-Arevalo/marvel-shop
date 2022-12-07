const users = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          token: action.payload.token,
        };
      case "GET_USER_WITH_ORDER_BY_ID":
        return {
          ...state,
          user: action.payload,
        };
      case "LOGOUT":
        return {
          ...state,
          token: null,
          user: null,
        };

        case "CREATE_USER":
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    
    }
  };
  export default users;