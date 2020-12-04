const { default: usersDB } = require("../../usersDB");

const dataLoading = () => {
  return {
    type: "DATA_LOADING",
  };
};
const dataLoaded = (data) => {
  return {
    type: "DATA_LOADED",
    payload: data,
  };
};
const dataUpdated = (data) => {
  return {
    type: "DATA_UPDATED",
    payload: data,
  };
};

