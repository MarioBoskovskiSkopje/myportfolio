import { GET_PROFILE_FB } from "../Types/Types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_PROFILE_FB: {
      return action.payload;
    }
    default:
      return state;
  }
}
