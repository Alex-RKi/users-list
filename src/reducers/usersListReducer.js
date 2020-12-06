const usersListReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE_USER":
      return action.payload;
    case "ADD_USER":
      return action.payload;
    case "UPDATE_USER":
      return action.payload;
    default:
      return state;
  }
};

export default usersListReducer;

