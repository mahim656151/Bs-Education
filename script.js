var mid= document.querySelectorAll(".mid");
var get = document.querySelectorAll("#list");
var form = document.querySelector("form");
var input= form.querySelector("#name");
var email= form.querySelector("#email");
var message= form.querySelector("#message");
var button = document.querySelector(".btn");
var design =  document.querySelector(".design");
var engineer = document.querySelector(".engineer");
var manage = document.querySelector(".manage");
var designDiv =  document.querySelector(".design-div");
var engineerDiv = document.querySelector(".engineer-div");
var manageDiv = document.querySelector(".manage-div");


var count =1;

setInterval(()=>{
    count++;
    var current = document.querySelector(".current");
    current.classList.remove("current");
    get[0].classList.add("get-one");
    get[1].classList.add("list-one");
        if(count > mid.length){
            mid[0].classList.add("current");


            count =1;
    
        }
        else{

            current.nextElementSibling.classList.add("current")
        }


    },3000);


    button.addEventListener("click", ()=>{

 const userinfo= {
            name:input.value,
            email:email.value,
            message:message.value,
        }
        input.value = "";
        email.value = "";
        message.value = "";
        console.log(userinfo)

    })

design.addEventListener("click", ()=>{
    designDiv.classList.toggle("display");

})
engineer.addEventListener("click", ()=>{
    engineerDiv.classList.toggle("display");
    
})
manage.addEventListener("click", ()=>{
    manageDiv.classList.toggle("display");
    
})


