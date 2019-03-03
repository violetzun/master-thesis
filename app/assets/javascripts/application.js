// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .




$('.timeline_container').mousemove(function(e)
{
var topdiv=$("#containertop").height();
var pag= e.pageY - topdiv-26;
$('.plus').css({"top":pag +"px", "background":"url('images/plus.png')","margin-left":"1px"});}).
mouseout(function()
{
$('.plus').css({"background":"url('')"});
});

function Arrow_Points()
{ 
var s = $('#container').find('.item');
$.each(s,function(i,obj){
var posLeft = $(obj).css("left");
$(obj).addClass('borderclass');
if(posLeft == "0px")
{
html = "<span class='rightCorner'></span>";
$(obj).prepend(html); 
}
else
{
html = "<span class='leftCorner'></span>";
$(obj).prepend(html);
}
});
}

$(".deletebox").live('click',function()
{
if(confirm("Are your sure?"))
{
$(this).parent().fadeOut('slow'); 
//Remove item block
$('#container').masonry( 'remove', $(this).parent() );
//Reload masonry plugin
$('#container').masonry( 'reload' );
//Hiding existing Arrows
$('.rightCorner').hide();
$('.leftCorner').hide();
//Injecting fresh arrows
Arrow_Points();
}
return false;
});

