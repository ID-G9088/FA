
var link=document.querySelector(".contact-us");
var popup=document.querySelector(".popup-contact");
var popupback=document.querySelector(".back-popup");
var close=popup.querySelector(".popup-contact-close");


link.addEventListener("click",function(event){
  event.preventDefault();
  console.log("ОТКРЫЛ ФОРМУ СВЯЗИ");
  popup.classList.add("popup-contact-show");
  popup.querySelector("[name=name]").focus();
  });

  link.addEventListener("click",function(event){
    event.preventDefault();
    console.log("ОТКРЫЛ ФОРМУ СВЯЗИ");
    popupback.classList.add("popup-contact-show");
    popup.querySelector("[name=name]").focus();
    });

close.addEventListener("click",function(event){
  event.preventDefault();
  console.log("ЗАКРЫЛ ФОРМУ СВЯЗИ");
  popup.classList.remove("popup-contact-show");
});

close.addEventListener("click",function(event){
  event.preventDefault();
  console.log("ЗАКРЫЛ ФОРМУ СВЯЗИ");
  popupback.classList.remove("popup-contact-show");
});

window.addEventListener("keydown", function (event) {
  if(event.keyCode==27) {
    if(popup.classList.contains("popup-contact-show"))
    {popup.classList.remove("popup-contact-show");
    }
  }
});


$(document).ready(function(){
	// появление/затухание кнопки #back-top
	$(function (){
		// прячем кнопку #back-top
		$("#to-top").hide();

		$(window).scroll(function (){
			if ($(this).scrollTop() > 600){
				$("#to-top").fadeIn();
			} else{
				$("#to-top").fadeOut();
			}
		});

		// при клике на ссылку плавно поднимаемся вверх
		$("#to-top").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 450);
			return false;
		});
	});
});
