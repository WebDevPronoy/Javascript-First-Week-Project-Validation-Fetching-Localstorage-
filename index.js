
//require fields
// descriptionform.setAttribute('required', '');
// assign.setAttribute('required', '');


// console.log(descriptionform.value);
// console.log(assign.value);
// console.log(localStorage);

// localStorage.setItem("description",descriptionform.value);
// localStorage.setItem("assign",assign.value);
// localStorage.setItem("security",security.value);
// console.log(localStorage);
// console.log(localStorage.getItem("description"))



const formOne = document.querySelector(".form");
let descriptionOne = document.querySelector("#description");
let security1 = document.querySelector("#security");
let assignOne = document.querySelector("#assign");








// const Pelement1 = document.querySelector(".testdescription");
// const Pelement2 = document.querySelector(".testsecurity");
// const Pelement3 = document.querySelector(".testassign");

// const Pelement4 = document.querySelector(".ldescription");
// const Pelement5 = document.querySelector(".lsecurity");
// const Pelement6 = document.querySelector(".lassign");

// const delbutton = document.querySelector("#delete");

var names=[]
var list = []

formOne.addEventListener("submit", (event) => {

    
    event.preventDefault();
    
    additem();
   

    



});

function additem(){

    // const el1array = document.createElement("div");
    // const el2 = document.createElement("p");
    // const cl3 = document.createElement("p");


    // el1.innerText = newItemDescription;
    // el1.innerText = newItemDescription;

    


    //append

    // Pelement1.appendChild(el1);
    // Pelement2.appendChild(el2);
    // Pelement3.appendChild(el3);

    // localStorage.setItem("list", JSON.stringify(list));

    
    
    let newItemDescription = descriptionOne.value;
    let newItemSecurity = security1.value;
    let newItemAssign = assignOne.value;

    list.push([newItemDescription,newItemSecurity,newItemAssign])
    
    localStorage.setItem("list", JSON.stringify(list));
    
    var storedNames = JSON.parse(localStorage.getItem("list"));

    console.log(storedNames[0])
    
    // localStorage.setItem("Security",newItemSecurity);
    // localStorage.setItem("Assign",newItemAssign);

//     descriptionOne.value = "";
//     security1.value = "";
//     assignOne.value = "";


//     //getitem storage
//     ldescription = localStorage.getItem("Description");
//     lsecurity = localStorage.getItem("Security");
//     lassign = localStorage.getItem("Assign");
    
//     //create element
//     var elld = document.createElement("p");
//     var ells = document.createElement("p");
//     var ella = document.createElement("p");

//     //element
//     elld.innerText = ldescription;
//     ells.innerText = lsecurity;
//     ella.innerText = lassign;


//     //add
//     Pelement4.appendChild(elld);
//     Pelement5.appendChild(ells);
//     Pelement6.appendChild(ella);

//     //delete button
//     const deletebutton = document.createElement("div");

//     delbutton.appendChild(deletebutton);

//     delbutton.addEventListener( ("click"), ()=> {
   
//     elld.remove();
//     ells.remove();
//     ella.remove();

//     localStorage.removeItem("Description");
//     localStorage.removeItem("Security");
//     localStorage.removeItem("Assign");



// });


}







