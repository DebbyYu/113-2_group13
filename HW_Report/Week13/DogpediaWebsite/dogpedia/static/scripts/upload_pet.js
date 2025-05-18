
var user = document.querySelector('#Upload_pet_user');
var getData = localStorage.getItem('access');
// var getDataArr = JSON.parse(getData);
const token = String(localStorage.getItem('access'));
const userdata = JSON.parse(atob(token.split('.')[1]));
user.value = userdata['username'];