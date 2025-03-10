const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

export const loginUser = (userData) => ({ type: 'LOGIN', payload: userData });
export const logoutUser = () => ({ type: 'LOGOUT' });

export default userReducer;
