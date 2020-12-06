let _idCounter = 1000;


export const deleteUserAction = (id, userList) => {
  const updatedList = deleteElem(id, userList);
  return {
    type: "DELETE_USER",
    payload: updatedList,
  };
};
export const addUserAction = (user, userList) => {
  const updatedList = addElem(user, userList);
  return {
    type: "ADD_USER",
    payload: updatedList,
  };
};

export const updateUserAction = (user, userList) => {
  const updatedList = updateElem(user, userList);
  return {
    type: "UPDATE_USER",
    payload: updatedList,
  };
};

const addElem = (elem, arr) => {
  const newElem = elem;
  newElem.id = _idCounter;
  _idCounter++;
  return [ ...arr, newElem ];
};
const deleteElem = (id, arr) => {
  const idx = arr.findIndex((elem) => elem.id === id);
  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
};
const updateElem = (newElem, arr) => {
  const idx = arr.findIndex((elem) => elem.id === newElem.id);
  const newArr = arr;
  newArr[idx] = newElem;
  return newArr;
};
