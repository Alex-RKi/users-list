import { createStore } from "redux";
import usersListReducer from "./reducers";

const initialState = {userList: [
  {
    id: 1,
    added: "2020-04-05",
    altered: "2020-11-20",
    fullname: "Иванов Иван Иванович",
    password: "qwerty777!",
    status: "admin",
    email: "admin@corbox.ru",
    phone: "8-900-000-11-22",
  },
  {
    id: 2,
    added: "2019-01-08",
    altered: "2020-06-03",
    fullname: "Иванова Ирина Петровна",
    password: "20190108Cr",
    status: "partner",
    email: "somepartner@mail.ru",
    phone: "8-800-123-45-67",
  },
  {
    id: 3,
    added: "2017-09-25",
    altered: "2020-011-20",
    fullname: "Семен Семнович Семенов",
    password: "semen!1995!",
    status: "client",
    email: "iamsemyon@yandex.ru",
    phone: "8-950-321-21-21",
  },
  {
    id: 4,
    added: "2018-01-06",
    altered: "2020-03-15",
    fullname: "Петровна Анна Ивановна",
    password: "hardPAsss!11",
    status: "client",
    email: "box@mail.ru",
    phone: "8-800-333-22-11",
  },
]}

// const localStorageData = localStorage.getItem("UsersListStored");
// const persistedState =
//   localStorageData === null ? initialState : JSON.parse(localStorageData);

const store = createStore(usersListReducer, initialState);

// store.subscribe(() => {
//   localStorage.setItem("UsersListStored", JSON.stringify(store.getState()));
// });

export default store;
