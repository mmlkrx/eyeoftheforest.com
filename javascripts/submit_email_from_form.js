$(document).ready(function(){var e=$("#email_form");$(e).submit(function(a){if(a.preventDefault(),""!==$("#email").val()){var i=$(e).serialize();$.ajax({type:"POST",url:$(e).attr("action"),data:i}).done(function(){$(".logo").hide(),$(".copy").hide(),$(".email").hide(),$(".social-media").hide(),$(".teaser").fadeIn(),setInterval(function(){$("input[type=password]").value="#EOTF",$("input[type=submit]").click()},100)})}})});