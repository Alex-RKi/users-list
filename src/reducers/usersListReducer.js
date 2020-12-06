const usersListReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        userList: action.payload,
      };
    case "ADD_USER":
      return {
        userList: action.payload,
      };
    case "UPDATE_USER":
      return {
        userList: action.payload,
      };
    default:
      return state;
  }
};

export default usersListReducer;
