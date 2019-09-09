const initialState = {
  projectName: null
};

export default function counter(state = initialState, action) {
    let newState = state;
    console.log(action);

  switch (action.type) {
    case "WATCH_GET_PROJECT":
      newState.projectName = action.payload.projectName;
      break;
    default:
      break;
  }
  return { ...newState };
}
