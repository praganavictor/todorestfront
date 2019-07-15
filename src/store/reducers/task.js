export default function task(state = [], action) {
  switch (action.type) {
    case "addTask":
      return [...state, action.task];
    default:
      return state;
  }
}
