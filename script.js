"use strict";

// этот код будет работать по современному стандарту ES5

$(document).ready(function() {
    $("#phone").mask("+7 (999) 999-9999");
  });

$(document).ready(function() {
    $("#callme").mask("+7 (999) 999-9999");
  });

$(document).ready(function(){
    $("#navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-90}, 1000);
    });
});

$(document).ready(function(){
    $("#navigation_bar").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-90}, 1000);
    });
});

$(document).ready(function(){
    $("#order").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-90}, 500);
    });
});

$(document).scroll( function() {
	if ( $(document).scrollTop() > 0 ) {
		$('#toTop').fadeIn();
		}
	else {
		$('#toTop').fadeOut();
	}
});

function up() {  
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
	if(top > 0) {  
	  window.scrollBy(0,((top+100)/-10));  
	  t = setTimeout('up()',10);  
	} else clearTimeout(t);  
	return false;  
} 


function showHide(element_id) {
//Если элемент с id-шником element_id существует
    if (document.getElementById(element_id)) { 
//Записываем ссылку на элемент в переменную obj
    var obj = document.getElementById(element_id); 
//Если css-свойство display не flex, то: 
        if (obj.style.display != "flex") { 
        obj.style.display = "flex"; //Показываем элемент
        }
        else obj.style.display = "none"; //Скрываем элемент
        }
//Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_id + " не найден!");
}

function closeMenu(element_id) {
//Если ширина окна меньше 800px
    if (document.documentElement.clientWidth < "800"){
//Если элемент с id-шником element_id существует
        if (document.getElementById(element_id)) { 
//Записываем ссылку на элемент в переменную obj
    var obj = document.getElementById(element_id); 
//Если css-свойство display не flex, то: 
        if (obj.style.display != "flex") { 
        obj.style.display = "flex"; //Показываем элемент
        }
        else obj.style.display = "none"; //Скрываем элемент
        }
//Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_id + " не найден!");
    }
}

function calculate() {
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);
    var type = 1;
   if (document.getElementById('sea').checked) {
    type = 1.4;
   }
    var volume = length * width * height / 1000;
    var price = volume * type;
    document.getElementById('volume').innerHTML = volume;
    document.getElementById('price').innerHTML = price;
}