import { userActionTypes } from "./user.types"
/**
 * function that returns an object
 */
export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});
