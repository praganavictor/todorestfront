export default function task(state = [], action) {
  switch (action.types) {
    case "addTask":
      return [...state, action.payload];
    default:
      return state;
  }
}
