

const description = document.getElementById('description');
const assign = document.getElementById('assign');
const security = document.getElementById('security');

//require fields
description.setAttribute('required', '');
assign.setAttribute('required', '');



//checking localstorage


localStorage.setItem("description",description);
localStorage.setItem("security",security);
localStorage.setItem("assign",assign);

localStorage.removeItem("")
console.log(localStorage);
