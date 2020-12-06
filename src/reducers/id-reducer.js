const idReducer = (state = 1000, action) => {
  switch (action.type) {
    case "UPDATE_ID":
      return action.payload;
    default:
      return state;
  }
};
export default idReducer;
