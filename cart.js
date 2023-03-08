let deleBtns = document.querySelectorAll(".delete");
for (let i = 0; i < deleBtns.length; i++) {
  let delbtn = deleBtns[i];
  delbtn.onclick = function (event) {
    var clicked = event.target;
    clicked.parentElement.parentElement.remove();
  };
}
let price = document.querySelectorAll(".price");
let num = document.querySelectorAll(".num");
let minus = document.querySelectorAll(".fa-minus");
let plus = document.querySelectorAll(".fa-plus");
let totF= document.querySelector(".finaltotal");
let totalF=0

for (let i = 0; i < plus.length; i++) {
  let plusbtn = plus[i];
  let minusbtn = minus[i];
  let res = 0;
  let pricet = price[i].innerText;
  
  plusbtn.addEventListener("click", function (event) {
    let quan = event.target;
    res++;
    quan.previousElementSibling.innerHTML = res;
    
    price[i].innerText= pricet*res;
    totalF=totalF+ +pricet
    totF.innerHTML="total is " + totalF

  });
  minusbtn.addEventListener("click", function (event) {
    let quan = event.target;
    
    if (res > 0) {
      quan.nextElementSibling.innerHTML = res - 1;
      res--;
      price[i].innerText= pricet*res;
      totalF=totalF - +pricet
      totF.innerHTML="total is " + totalF
      
    }
  
  });
  
}


let love = document.querySelectorAll(".fa-regular");
for (let i = 0; i < love.length; i++) {
  let loveclick = love[i];
  loveclick.addEventListener("click", function (event) {
    let lov = event.target;
    lov.classList.toggle("love");
  });
}
