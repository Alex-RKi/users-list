const createTemplate = (arr) => {
  return ({
    added: formatDate(),
    altered: formatDate(),
    fullname: arr[2].value,
    password: arr[3].value,
    status: arr[0].value,
    email: arr[4].value,
    phone: arr[5].value,
  });
};
const formatDate = () => {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export default createTemplate;