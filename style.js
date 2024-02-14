window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

let value_display = document.querySelectorAll(".num");
let interval = 3000;

value_display.forEach((value_display) => {
   let startvalue = 0
   let endvalue  = parseInt(value_display.getAttribute("data-val"));

   let duration =  Math.floor(interval/endvalue);

   let counter = setInterval(function(){
    startvalue += 1;
    value_display.textContent = startvalue;

    if(startvalue == endvalue){
        clearInterval(counter);
    }
   }, duration)
});


// window.addEventListener("scroll", function(){
//     var header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })
