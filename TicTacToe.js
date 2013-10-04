$(document).ready(function () {
	
	displayUsername();
	colorGrid();
});

var Player1 = {name: "", results: [], hasWon: false};
var Player2 = {name: "Computer", results: [], hasWon: false}
var currentPlayer = Player1;


var someoneHasWon = false;


function displayUsername () {
	$('#setUsername').click(function (event) {
		event.preventDefault();
		var username = $('#Username').val();
		Player1.name = username;
		$('#Message').text('Welcome ' + username + '!');
	});
	$('#setUsername').val("");
}

function colorGrid () {
	$('.grid').click(function (event){
		if (Player1.name == "") {
			$('#Message').text('Please enter your name first');
			return;
		}
		event.preventDefault();
		var currentId = $(this).attr('id');
		currentPlayer.results.push(currentId);
		console.log(currentPlayer);
		currentId = currentId.split("-");
		var xCoordinate = currentId[0];
		var yCoordinate = currentId[1];
		var gridId = '#' + xCoordinate + '-' + yCoordinate;
		$(gridId).css({"background-color": "red"});
		if (currentPlayer.results.length >= 3) {
			if(playerHasWon(currentPlayer)){
				$('#gameProcess').append('<p>' + currentPlayer.name + ' has won!!!</p>');
			}
		}
	})
}

function playerHasWon (player) {
	var resultArray = player.results;
	if ((resultArray.indexOf("0-0") > -1 && resultArray.indexOf("0-1") > -1 && resultArray.indexOf("0-0") > -1) ||
		(resultArray.indexOf("1-0") > -1 && resultArray.indexOf("1-1") > -1 && resultArray.indexOf("1-2") > -1) ||
		(resultArray.indexOf("2-0") > -1 && resultArray.indexOf("2-1") > -1 && resultArray.indexOf("0-0") > -1) ||
		(resultArray.indexOf("0-0") > -1 && resultArray.indexOf("1-0") > -1 && resultArray.indexOf("2-0") > -1) ||
		(resultArray.indexOf("1-0") > -1 && resultArray.indexOf("1-1") > -1 && resultArray.indexOf("1-2") > -1) ||
		(resultArray.indexOf("2-0") > -1 && resultArray.indexOf("2-1") > -1 && resultArray.indexOf("2-2") > -1) ||
		(resultArray.indexOf("0-0") > -1 && resultArray.indexOf("1-1") > -1 && resultArray.indexOf("2-2") > -1)) {
		player.hasWon = true;
	}
	return true;

}


	

