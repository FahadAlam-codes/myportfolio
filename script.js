let menu = document.querySelector(".menu");
let mobOptionClick = 


menu.addEventListener("click", ()=>{
  let nav = document.querySelector(".options-div");
  nav.classList.toggle("active");
});


// auto-type part
let typed = new Typed(".auto-type",{
  strings: ["SURVEY PROGRAMMER", "WEB DEVELOPER", "PROGRAMMER"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

