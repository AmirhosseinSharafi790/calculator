const output = document.querySelector(".text");
const vals = document.querySelectorAll(".val");
const clearBtn = document.querySelector(".AC");
const deleteBtn = document.querySelector(".DEL");
const equqlBtn = document.querySelector(".equal");
const btnwhite = document.getElementById("btn-white");
const btnblack = document.getElementById("btn-black");
const span = document.querySelector("span");
vals.forEach(val => {
    val.addEventListener("click" , ()=>{
        output.value += val.value;
    })
});
clearBtn.addEventListener("click" , ()=>{
    output.value = "";
});
deleteBtn.addEventListener("click" , ()=>{
    output.value  = output.value.slice(0 , -1);
});
equqlBtn.addEventListener("click" , ()=>{
    output.value  = Number(eval(output.value));
});
btnwhite.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "#bababa";
    span.style.color = "black";
});
btnblack.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "#000000c4";
    span.style.color = "white";
});