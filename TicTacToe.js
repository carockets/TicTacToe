$(document).ready(function () {
	
	displayUsername();
	colorGrid();

});

function displayUsername () {
	$('#setUsername').click(function (event) {
		event.preventDefault();
		var username = $('#Username').val();
		$('#Message').text('Welcome ' + username + '!');
	});
}

function colorGrid () {
	$('.grid').click(function (event){
		event.preventDefault();
		var x = Math.floor(Math.random()*2);
		var y = Math.floor(Math.random()*2);
		var gridId = '#' + x + '-' + y;
		$(gridId).css({"background-color": "red"});
	})
}


	

