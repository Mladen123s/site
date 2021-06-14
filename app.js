const hamburger = document.getElementsByClassName("hamburger")[0]
const navLinks = document.getElementsByClassName("nav-section")[0]



hamburger.addEventListener("click" , () => {
 navLinks.classList.toggle("active");
 
});




let imageElement1 = Array.from(document.querySelector(".image-section"))
let imageElement2 = Array.from(document.querySelector(".image-section-2"))

window.addEventListener("scroll",scanElements());


function scanElements(){
 imageElement1.forEach(element =>{
 if(isVisible(element)){
  element.classList.add("active");
 }
 else{
  element.classList.remove("active")
 }
})
}


function isVisible(element){
 const elementDiv = element.getBoundingClientRect();
 let distanceFromTop = -300;
 return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}