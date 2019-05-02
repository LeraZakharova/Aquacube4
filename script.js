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

function calculator() {
  var maintain = document.getElementById("calc_maintain");
  var aqua = document.getElementById("calc_aqua");
  var checkbox = document.getElementById("switch");

  if (checkbox.checked) {
    maintain.style.display = "flex";
    aqua.style.display = "none";
  } else {
    aqua.style.display = "flex";
    maintain.style.display = "none";
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

function vol() {
  var height = document.getElementById("height").value;
  var width = document.getElementById("width").value;
  var length = document.getElementById("length").value;
  if (height > 0 && width > 0 && length > 0) {
    document.getElementById("height").value = "";
    document.getElementById("width").value = "";
    document.getElementById("length").value = "";
  }
}

function mult() {
  var multiply;
  var height = document.getElementById("height").value;
  var width = document.getElementById("width").value;
  var length = document.getElementById("length").value;
  if (height > 0 && width > 0 && length > 0) {
    multiply = Math.round(height * width * length / 1000);
    document.getElementById("volume").value = multiply;
  }
}

function calc() {
  var price;
  var multiply;
  var volume = document.getElementById("volume").value;
  var height = document.getElementById("height").value;
  var width = document.getElementById("width").value;
  var length = document.getElementById("length").value;
  var type = document.getElementById("sweet");
  var reef = document.getElementById("reef");
  var first = document.getElementById("first");
  var second = document.getElementById("second");
  var guarantee = document.getElementById("guarantee");
  var result = document.getElementById("result");
  var text = document.getElementById("result_text");
  var thousand = document.getElementById("thousand");
  var param = document.getElementById("param");


  if (type.checked) {
    first.innerHTML = "Живые растения";
    second.innerHTML = "Искуственные декорации";
  } else {
    first.innerHTML = "С кораллами";
    second.innerHTML = "Без кораллов";
  }

  if (volume > 0 && volume <= 100) {
    text.style.display = "flex";
    param.style.display = "none";
    thousand.style.display = "none";
    if (type.checked) {
      if (reef.checked) {
        if (guarantee.checked) {
          price = 5000;
        } else {
          price = 3700;
        }
      } else {
        if (guarantee.checked) {
          price = 4500;
        } else {
          price = 3500;
        }
      }
    } else {
      if (reef.checked) {
        if (guarantee.checked) {
          price = 10000;
        } else {
          price = 6000;
        }
      } else {
        if (guarantee.checked) {
          price = 8000;
        } else {
          price = 4500;
        }
      }
    }
  } else if (volume > 0 && volume <= 500) {
    text.style.display = "flex";
    param.style.display = "none";
    thousand.style.display = "none";
    if (type.checked) {
      if (reef.checked) {
        if (guarantee.checked) {
          price = 6500;
        } else {
          price = 5500;
        }
      } else {
        if (guarantee.checked) {
          price = 6000;
        } else {
          price = 5000;
        }
      }
    } else {
      if (reef.checked) {
        if (guarantee.checked) {
          price = 20000;
        } else {
          price = 9000;
        }
      } else {
        if (guarantee.checked) {
          price = 12000;
        } else {
          price = 7000;
        }
      }
    }
  } else if (volume > 0 && volume <= 1000) {
    text.style.display = "flex";
    param.style.display = "none";
    thousand.style.display = "none";
    if (type.checked) {
      if (reef.checked) {
        if (guarantee.checked) {
          price = 8800;
        } else {
          price = 7000;
        }
      } else {
        if (guarantee.checked) {
          price = 7700;
        } else {
          price = 6000;
        }
      }
    } else {
      if (reef.checked) {
        if (guarantee.checked) {
          price = 30000;
        } else {
          price = 13000;
        }
      } else {
        if (guarantee.checked) {
          price = 19000;
        } else {
          price = 9000;
        }
      }
    }
  } else if (volume > 1000) {
    thousand.style.display = "flex";
    text.style.display = "none";
    param.style.display = "none";
  } else {
    param.style.display = "flex";
    thousand.style.display = "none";
    ext.style.display = "none";
  }
  result.innerHTML = price;
}

function aqua_volume(){
  var height = document.getElementById("aqua_hei").value;
  var width = document.getElementById("aqua_wid").value;
  var length = document.getElementById("aqua_len").value;
  if (height>0 && width>0 && length>0){
    document.getElementById("aqua_hei").value = "";
    document.getElementById("aqua_wid").value = "";
    document.getElementById("aqua_len").value = "";
  }
}

function aqua_mult(){
  var multiply;
  var height = document.getElementById("aqua_hei").value;
  var width = document.getElementById("aqua_wid").value;
  var length = document.getElementById("aqua_len").value;
  if (height>0 && width>0 && length>0){
    multiply=Math.round(height*width*length/1000);
    document.getElementById("aqua_vol").value = multiply;
  }
}

function aqua() {
  var price;
  var volume = document.getElementById("aqua_vol").value;
  var height = document.getElementById("aqua_hei").value;
  var width = document.getElementById("aqua_wid").value;
  var length = document.getElementById("aqua_len").value;
  var type = document.getElementById("aqua_sweet");
  var reef = document.getElementById("aqua_reef");
  var first = document.getElementById("aqua_first");
  var second = document.getElementById("aqua_second");
  var result = document.getElementById("aqua_result");
  var text = document.getElementById("aqua_result_text");
  
  if (type.checked) {
    first.innerHTML = "Живые растения";
    second.innerHTML = "Искуственные декорации";
} else { 
    first.innerHTML = "С кораллами";
    second.innerHTML = "Без кораллов";
}

if (type.checked){
    if (reef.checked){
      price=volume*600;
    }else{
      price=volume*500;
    }
  }else{
    if (reef.checked){
     price=volume*900;
    }else{
      price=volume*800;
    }
}
  text.style.display = "flex";
  result.innerHTML = price;
}