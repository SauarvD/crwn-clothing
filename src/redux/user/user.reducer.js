/**
 * function that receives state and action
 * state = last state or initial state
 * action = object that has type which is a string value which tells which
 * specific action it is and a payload which is a flexible property
 */
const INITIAL_STATE = {
  currentUser: null
};
/**
 * if state is ONLY undefined, it will use the default state
 * if it is NULL, it will use the null as it is
 * @param {*} state
 * @param {*} action
 */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
