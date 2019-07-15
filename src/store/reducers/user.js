export default function user(state = {}, action) {
  switch (action.type) {
    case "activeUser":
      return {
        ...state,
        ActiveUser: action.user
      };
    default:
      return state;
  }
}
