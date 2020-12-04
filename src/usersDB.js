export default class UsersDB {
  
  getData = async () => {
    return  new Promise((resolve,_) => {
      setTimeout(() => {
        resolve(this._dummyData);
      }, 1000);
    });
  };

  _dummyData = [
    {
      id: 1,
      added: "2020-04-05",
      altered: "2020-11-20",
      fullName: ["Иванов", "Иван", "Иванович"],
      password: "qwerty777!",
      status: "admin",
      email: "admin@corbox.ru",
      phone: "8-900-000-11-22",
    },
    {
      id: 2,
      added: "2019-01-08",
      altered: "2020-06-03",
      fullName: ["Иванова", "Ирина", "Петровна"],
      password: "20190108Cr",
      status: "partner",
      email: "somePartner@mail.ru",
      phone: "8-800-123-45-67",
    },
    {
      id: 3,
      added: "2017-09-25",
      altered: "2020-011-20",
      fullName: ["Семёнов", "Семён", "Семёнович"],
      password: "semen-rulit2020",
      status: "client",
      email: "admin@corbox.ru",
      phone: "8-950-321-21-21",
    },
    {
      id: 4,
      added: "2018-01-06",
      altered: "2020-03-15",
      fullName: ["Петровна", "Анна", "Ивановна"],
      password: "hardPAsss!11",
      status: "client",
      email: "admin@corbox.ru",
      phone: "8-800-333-22-11",
    },
  ];
}
