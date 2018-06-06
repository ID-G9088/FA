
var link=document.querySelector(".contact-us");
var popup=document.querySelector(".popup-contact");
var close=popup.querySelector(".popup-contact-close");


link.addEventListener("click",function(event){
  event.preventDefault();
  console.log("ОТКРЫЛ ФОРМУ СВЯЗИ");
  popup.classList.add("popup-contact-show");
  popup.querySelector("[name=name]").focus();
  });


close.addEventListener("click",function(event){
  event.preventDefault();
  console.log("ЗАКРЫЛ ФОРМУ СВЯЗИ");
  popup.classList.remove("popup-contact-show");
});

window.addEventListener("keydown", function (event) {
  if(event.keyCode==27) {
    if(popup.classList.contains("popup-contact-show"))
    {popup.classList.remove("popup-contact-show");
    }
  }
});
