$(document).ready(function(){var a=$("#email_form");$(a).submit(function(e){if(e.preventDefault(),""!==$("#email").val()){var i=$(a).serialize();$.ajax({type:"POST",url:$(a).attr("action"),data:i}).done(function(){$(".logo").hide(),$(".copy").hide(),$(".email").hide(),$(".social-media").hide(),$(".teaser").fadeIn(),$("#pw").fadeIn(),$(".container").css("background-color","#000000"),$(".container").css("background-image","none")})}})});