$("document").ready(function(){
	console.log("ready");
	resize();
});

 var called = false
window.onscroll = function (event) {
  // called when the window is scrolled.
  console.log(document.body.scrollTop);
  var heigth = document.body.scrollTop- 35;
  if (heigth >= 400 && called == false) { 
  	called = true
  	scrolldown();
  };
  if (heigth <= -400 && called == false) { 
  	called = true
  	scrollup();
  };
}
setInterval(function() {
    called = false;
    console.log('reset');
}, 1000);

function resize(){
	var width = $(window).width();
	if (width <= 768) {
		$(".nav").addClass("hidden");
		$(".mainnav").removeClass("hidden");
		$('.smallnav').addClass("hidden");
	}
	if(width <= 480){
		$(".mainnav").addClass("hidden");
		$('.smallnav').removeClass("hidden");
	}
	else{
		$(".nav").removeClass("hidden");
		$(".mainnav").removeClass("hidden");
		$('.smallnav').addClass("hidden");
	}
}

function menutoggle(){
    $(".nav").toggleClass("hidden").hide().slideToggle();
    $('.menuicon').toggle();
    $('.closemenuicon').toggle();
}
var currenthl = 1;
function ciclrchange(id){
	$('.active').removeClass('active');
	$('.circle'+id).addClass('active');
	$('.hl'+id).removeClass('hidden');
	$('.hl'+id).fadeIn();
	$('.hl'+currenthl).addClass('hidden');
	currenthl = id;
	
}
var currentscroll = 1;
function scrolldown(){
	if (currentscroll <= 7) {
		$('.coursecontent').slideToggle("slow");
		$('.active').removeClass('active');
		++currentscroll;
		$('.selection'+currentscroll).addClass('active');
		$('.coursecontent').slideToggle("slow");
	}
	else{
		$('#scroll').hide();
	};
}

function scrollup(){
	if (currentscroll <= 7) {
		$('.coursecontent').slideToggle("slow");
		$('.active').removeClass('active');
		--currentscroll;
		$('.selection'+currentscroll).addClass('active');
		$('.coursecontent').slideToggle("slow");
	}
	else{
		$('#scroll').hide();
	};
}

function section(id){
	$('.coursecontent').slideToggle("slow");
	$('.active').removeClass('active');
	currentscroll = id;
	$('.selection'+currentscroll).addClass('active');
	$('.coursecontent').slideToggle("slow");
}

function openhovermenu(){
	$('.hovernav').toggleClass("hidden");
	$('.smallnav').toggleClass("hidden");
}