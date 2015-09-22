$(document).ready(function() {
	$("p.beachweek").css("color", "black");
	$("#beachweek").css("display", "block");
	$("#pilot").css("display", "block");
	$("p.pilot").css("color", "black");
	$('#shadow').css("z-index", "-2");
	
	$('#protected li').click(function() {
		$('#shadow').animate({"z-index": "999"}, 50);
		$('#shadow').animate({"opacity": ".6"}, 500);
		$("body").animate({"margin-left":"0px"}, 300);
		$('#password-popup').animate({"z-index": "1000"}, 50);
		$('#password-popup').animate({"opacity": "1"}, 50);
	});
	
	$('div.timeline>p.create').click(function() {
		$('#shadow').animate({"z-index": "999"}, 50);
		$('#shadow').animate({"opacity": ".6"}, 500);
		$('#create-popup').animate({"z-index": "1000"}, 50);
		$('#create-popup').animate({"opacity": "1"}, 50);
	});
	
	$('#submit').click(function() {
		if($('#password-input').val() == "awbravo"){
		$('#shadow').animate({"z-index": "-1"}, 50);
		$('#shadow').animate({"opacity": "0"}, 500);
		$('#password-popup').animate({"z-index": "0"}, 50);
		$('#password-popup').animate({"opacity": "0"}, 50);
		window.location.href = "archives.html";
		$(this).animate({"font-weight": "bold"}, 1);
		}
	});
	
	$('#create').click(function() {
		if($('#title-input').val() != ""){
		$('#shadow').animate({"z-index": "-1"}, 50);
		$('#shadow').animate({"opacity": "0"}, 500);
		$('#create-popup').animate({"z-index": "0"}, 50);
		$('#create-popup').animate({"opacity": "0"}, 50);
		$("p.new").html($('#title-input').val().toUpperCase());
		$(".new").css("display", "block");
		$("#new>p").html($("#prompt").val());
		}
	});
	
	$('#shadow').click(function() {
		$('#shadow').animate({"z-index": "0"}, 50);
		$('#shadow').animate({"opacity": "0"}, 50);
		$('#password-popup').animate({"z-index": "0"}, 50);
		$('#password-popup').animate({"opacity": "0"}, 50);
		$('#create-popup').animate({"z-index": "0"}, 50);
		$('#create-popup').animate({"opacity": "0"}, 50);
	});
	
	$("p.beachweek").click(function(){
		$("section#cali").hide();
		$("section#summer").hide();
		$("section#lakeweek").hide();		
		$("section#high").hide();
		$("#fall14").hide();
				
		$("section#beachweek").css("display", "block");
		$("p.beachweek").css("color", "black");
		
		$("p.cali").css("color", "6f6c6c");
		$("p.summer").css("color", "6f6c6c");
		$("p.lakeweek").css("color", "6f6c6c");
		$("p.high").css("color", "6f6c6c");
		$("p.fall14").css("color", "6f6c6c");
	});
	
	$("p.cali").click(function(){
		$("#beachweek").hide();
		$("#summer").hide();
		$("#lakeweek").hide();
		$("#high").hide();
		$("#fall14").hide();
		
		$("#cali").css("display", "block");
		$("p.cali").css("color", "black");
		
		$("p.beachweek").css("color", "6f6c6c");
		$("p.summer").css("color", "6f6c6c");
		$("p.lakeweek").css("color", "6f6c6c");
		$("p.high").css("color", "6f6c6c");
		$("p.fall14").css("color", "6f6c6c");
	});
	
	$("p.summer").click(function(){
		$("#beachweek").hide();
		$("#cali").hide();
		$("#lakeweek").hide();
		$("#high").hide();
		$("#fall14").hide();
		
		$("#summer").css("display", "block");
		$("p.summer").css("color", "black");
		
		$("p.beachweek").css("color", "6f6c6c");
		$("p.cali").css("color", "6f6c6c");
		$("p.lakeweek").css("color", "6f6c6c");
		$("p.high").css("color", "6f6c6c");
		$("p.fall14").css("color", "6f6c6c");
	});
	
	$("p.lakeweek").click(function(){
		$("#beachweek").hide();
		$("#cali").hide();
		$("#summer").hide();
		$("#high").hide();
		$("#fall14").hide();
		
		$("#lakeweek").css("display", "block");
		$("p.lakeweek").css("color", "black");
		
		$("p.beachweek").css("color", "6f6c6c");
		$("p.cali").css("color", "6f6c6c");
		$("p.summer").css("color", "6f6c6c");
		$("p.high").css("color", "6f6c6c");
		$("p.fall14").css("color", "6f6c6c");
	});
	
	$("p.high").click(function(){
		$("#beachweek").hide();
		$("#cali").hide();		
		$("#lakeweek").hide();
		$("#summer").hide();
		$("#fall14").hide();
		
		$("#high").css("display", "block");
		$("p.high").css("color", "black");
		
		$("p.beachweek").css("color", "6f6c6c");
		$("p.cali").css("color", "6f6c6c");
		$("p.lakeweek").css("color", "6f6c6c");
		$("p.summer").css("color", "6f6c6c");
		$("p.fall14").css("color", "6f6c6c");
	});
	
	$("p.fall14").click(function(){
		$("#high").hide();
		$("#beachweek").hide();
		$("#cali").hide();		
		$("#lakeweek").hide();
		$("#summer").hide();
		
		$("#fall14").css("display", "block");
		$("p.fall14").css("color", "black");
		
		$("p.beachweek").css("color", "6f6c6c");
		$("p.cali").css("color", "6f6c6c");
		$("p.lakeweek").css("color", "6f6c6c");
		$("p.summer").css("color", "6f6c6c");
		$("p.high").css("color", "6f6c6c");
	});
	
	
	
	$("p.pilot").click(function(){
		$("#podcast").hide();
		$("#misc").hide();		
		$("#new").hide();
		
		$("#pilot").css("display", "block");
		$("p.pilot").css("color", "black");
		
		$("p.podcast").css("color", "6f6c6c");
		$("p.misc").css("color", "6f6c6c");
		$("p.new").css("color", "6f6c6c");
	});
	
	$("p.podcast").click(function(){
		$("#pilot").hide();
		$("#misc").hide();		
		$("#new").hide();
		
		$("#podcast").css("display", "block");
		$("p.podcast").css("color", "black");
		
		$("p.pilot").css("color", "6f6c6c");
		$("p.misc").css("color", "6f6c6c");
		$("p.new").css("color", "6f6c6c");
	});
		
	$("p.misc").click(function(){
		$("#podcast").hide();
		$("#pilot").hide();		
		$("#new").hide();
		
		$("#misc").css("display", "block");
		$("p.misc").css("color", "black");
		
		$("p.podcast").css("color", "6f6c6c");
		$("p.pilot").css("color", "6f6c6c");
		$("p.new").css("color", "6f6c6c");
	});
	
	$("p.new").click(function(){
		$("#podcast").hide();
		$("#pilot").hide();		
		$("#misc").hide();
		
		$("#new").css("display", "block");
		$("p.new").css("color", "black");
		
		$("p.podcast").css("color", "6f6c6c");
		$("p.pilot").css("color", "6f6c6c");
		$("p.misc").css("color", "6f6c6c");
	});
	
	$("div.menu").toggle(function(){
		$("body").animate({"margin-left":"200px"}, 300);
	}, function(){
		$("body").animate({"margin-left":"0px"}, 300);
	});
	
});


















