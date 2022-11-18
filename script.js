"use strict";

let text = document.querySelector(".text");

let num = +prompt("Ixtiyoriy raqam kiriting");

let first = num%3

let second = num%5
if(first == 0 && second ==0){
   text.textContent = "Bu son 3 ga ham, 5 ga ham bo'linadi"
}
else if (first==0){
   text.textContent = "Bu son 3 ga bo'linadi"
}

else if(second == 0){
   text.textContent = "Bu son 5 ga bo'linadi"
}

else{ text.textContent = "Bu son 3 ga ham, 5 ga ham bo'linmaydi" }


// console.log(num);

