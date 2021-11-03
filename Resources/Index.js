function myfunc() {
	// Setting DOM to all boxes or input field
	let b1 = $("#b1").value;
	let b2 = $("#b2").value;
	let b3 = $("#b3").value;
	let b4 = $("#b4").value;
	let b5 = $("#b5").value;
	let b6 = $("#b6").value;
	let b7 = $("#b7").value;
	let b8 = $("#b8").value;
	let b9 = $("#b9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if (
		(b1 == "x" || b1 == "X") &&
		(b2 == "x" || b2 == "X") &&
		(b3 == "x" || b3 == "X")
	) {
		$("3print").innerHTML = "Player X won";
		$("#b4").disabled = true;
		$("#b5").disabled = true;
		$("#b6").disabled = true;
		$("#b7").disabled = true;
		$("#b8").disabled = true;
		$("#b9").disabled = true;
		window.alert("Player X won");
	} else if (
		(b1 == "x" || b1 == "X") &&
		(b4 == "x" || b4 == "X") &&
		(b7 == "x" || b7 == "X")
	) {
		$("#print").innerHTML = "Player X won";
		$("#b2").disabled = true;
		$("#b3").disabled = true;
		$("#b5").disabled = true;
		$("#b6").disabled = true;
		$("#b8").disabled = true;
		$("#b9").disabled = true;

		window.alert("Player X won");
	} else if (
		(b7 == "x" || b7 == "X") &&
		(b8 == "x" || b8 == "X") &&
		(b9 == "x" || b9 == "X")
	) {
		$("#print").innerHTML = "Player X won";
		$("#b1").disabled = true;
		$("#b2").disabled = true;
		$("#b3").disabled = true;
		$("#b4").disabled = true;
		$("#b5").disabled = true;
		$("#b6").disabled = true;
		window.alert("Player X won");
	} else if (
		(b3 == "x" || b3 == "X") &&
		(b6 == "x" || b6 == "X") &&
		(b9 == "x" || b9 == "X")
	) {
		$("#print").innerHTML = "Player X won";
		$("#b1").disabled = true;
		$("#b2").disabled = true;
		$("#b4").disabled = true;
		$("#b5").disabled = true;
		$("#b7").disabled = true;
		$("#b8").disabled = true;
		window.alert("Player X won");
	} else if (
		(b1 == "x" || b1 == "X") &&
		(b5 == "x" || b5 == "X") &&
		(b9 == "x" || b9 == "X")
	) {
		$("#print").innerHTML = "Player X won";
		$("#b2").disabled = true;
		$("#b3").disabled = true;
		$("#b4").disabled = true;
		$("#b6").disabled = true;
		$("#b7").disabled = true;
		$("#b8").disabled = true;
		window.alert("Player X won");
	} else if (
		(b3 == "x" || b3 == "X") &&
		(b5 == "x" || b5 == "X") &&
		(b7 == "x" || b7 == "X")
	) {
		$("#print").innerHTML = "Player X won";
		$("#b1").disabled = true;
		$("#b2").disabled = true;
		$("#b4").disabled = true;
		$("#b6").disabled = true;
		$("#b8").disabled = true;
		$("#b9").disabled = true;
		window.alert("Player X won");
	} else if (
		(b2 == "x" || b2 == "X") &&
		(b5 == "x" || b5 == "X") &&
		(b8 == "x" || b8 == "X")
	) {
		$("#print").innerHTML = "Player X won";
		$("#b1").disabled = true;
		$("#b3").disabled = true;
		$("#b4").disabled = true;
		$("#b6").disabled = true;
		$("#b7").disabled = true;
		$("#b9").disabled = true;
		window.alert("Player X won");
	} else if (
		(b4 == "x" || b4 == "X") &&
		(b5 == "x" || b5 == "X") &&
		(b6 == "x" || b6 == "X")
	) {
		$("#print").innerHTML = "Player X won";
		$("#b1").disabled = true;
		$("#b2").disabled = true;
		$("#b3").disabled = true;
		$("#b7").disabled = true;
		$("#b8").disabled = true;
		$("#b9").disabled = true;
		window.alert("Player X won");
	}

	// Checking of Player X finsh
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if (
		(b1 == "0" || b1 == "0") &&
		(b2 == "0" || b2 == "0") &&
		(b3 == "0" || b3 == "0")
	) {
		$("#print").innerHTML = "Player 0 won";
		$("#b4").disabled = true;
		$("#b5").disabled = true;
		$("#b6").disabled = true;
		$("#b7").disabled = true;
		$("#b8").disabled = true;
		$("#b9").disabled = true;
		window.alert("Player 0 won");
	} else if (
		(b1 == "0" || b1 == "0") &&
		(b4 == "0" || b4 == "0") &&
		(b7 == "0" || b7 == "0")
	) {
		$("#print").innerHTML = "Player 0 won";
		$("#b2").disabled = true;
		$("#b3").disabled = true;
		$("#b5").disabled = true;
		$("#b6").disabled = true;
		$("#b8").disabled = true;
		$("#b9").disabled = true;
		window.alert("Player 0 won");
	} else if (
		(b7 == "0" || b7 == "0") &&
		(b8 == "0" || b8 == "0") &&
		(b9 == "0" || b9 == "0")
	) {
		$("#print").innerHTML = "Player 0 won";
		$("#b1").disabled = true;
		$("#b2").disabled = true;
		$("#b3").disabled = true;
		$("#b4").disabled = true;
		$("#b5").disabled = true;
		$("#b6").disabled = true;
		window.alert("Player 0 won");
	} else if (
		(b3 == "0" || b3 == "0") &&
		(b6 == "0" || b6 == "0") &&
		(b9 == "0" || b9 == "0")
	) {
		$("#print").innerHTML = "Player 0 won";
		$("#b1").disabled = true;
		$("#b2").disabled = true;
		$("#b4").disabled = true;
		$("#b5").disabled = true;
		$("#b7").disabled = true;
		$("#b8").disabled = true;
		window.alert("Player 0 won");
	} else if (
		(b1 == "0" || b1 == "0") &&
		(b5 == "0" || b5 == "0") &&
		(b9 == "0" || b9 == "0")
	) {
		$("#print").innerHTML = "Player 0 won";
		$("#b2").disabled = true;
		$("#b3").disabled = true;
		$("#b4").disabled = true;
		$("#b6").disabled = true;
		$("#b7").disabled = true;
		$("#b8").disabled = true;
		window.alert("Player 0 won");
	} else if (
		(b3 == "0" || b3 == "0") &&
		(b5 == "0" || b5 == "0") &&
		(b7 == "0" || b7 == "0")
	) {
		$("#print").innerHTML = "Player 0 won";
		$("#b1").disabled = true;
		$("#b2").disabled = true;
		$("#b4").disabled = true;
		$("#b6").disabled = true;
		$("#b8").disabled = true;
		$("#b9").disabled = true;
		window.alert("Player 0 won");
	} else if (
		(b2 == "0" || b2 == "0") &&
		(b5 == "0" || b5 == "0") &&
		(b8 == "0" || b8 == "0")
	) {
		$("#print").innerHTML = "Player 0 won";
		$("#b1").disabled = true;
		$("#b3").disabled = true;
		$("#b4").disabled = true;
		$("#b6").disabled = true;
		$("#b7").disabled = true;
		$("#b9").disabled = true;
		window.alert("Player 0 won");
	} else if (
		(b4 == "0" || b4 == "0") &&
		(b5 == "0" || b5 == "0") &&
		(b6 == "0" || b6 == "0")
	) {
		$("#print").innerHTML = "Player 0 won";
		$("#b1").disabled = true;
		$("#b2").disabled = true;
		$("#b3").disabled = true;
		$("#b7").disabled = true;
		$("#b8").disabled = true;
		$("#b9").disabled = true;
		window.alert("Player 0 won");
	}

	// Checking of Player 0 finsh
	// Here, Checking about Tie
	else if (
		(b1 == "X" || b1 == "0") &&
		(b2 == "X" || b2 == "0") &&
		(b3 == "X" || b3 == "0") &&
		(b4 == "X" || b4 == "0") &&
		(b5 == "X" || b5 == "0") &&
		(b6 == "X" || b6 == "0") &&
		(b7 == "X" || b7 == "0") &&
		(b8 == "X" || b8 == "0") &&
		(b9 == "X" || b9 == "0")
	) {
		$("#print").innerHTML = "Match Tie";
		window.alert("Match Tie");
	} else {
		// Here, Printing Result
		if (flag == 1) {
			$("#print").innerHTML = "Player X Turn";
		} else {
			$("#print").innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset game
function myfunc_2() {
	location.reload();
	$("#b1").value = "";
	$("#b2").value = "";
	$("#b3").value = "";
	$("#b4").value = "";
	$("#b5").value = "";
	$("#b6").value = "";
	$("#b7").value = "";
	$("#b8").value = "";
	$("#b9").value = "";
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		$("#b1").value = "X";
		$("#b1").disabled = true;
		flag = 0;
	} else {
		$("#b1").value = "0";
		$("#b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		$("#b2").value = "X";
		$("#b2").disabled = true;
		flag = 0;
	} else {
		$("#b2").value = "0";
		$("#b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		$("#b3").value = "X";
		$("#b3").disabled = true;
		flag = 0;
	} else {
		$("#b3").value = "0";
		$("#b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		$("#b4").value = "X";
		$("#b4").disabled = true;
		flag = 0;
	} else {
		$("#b4").value = "0";
		$("#b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		$("#b5").value = "X";
		$("#b5").disabled = true;
		flag = 0;
	} else {
		$("#b5").value = "0";
		$("#b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		$("#b6").value = "X";
		$("#b6").disabled = true;
		flag = 0;
	} else {
		$("#b6").value = "0";
		$("#b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		$("#b7").value = "X";
		$("#b7").disabled = true;
		flag = 0;
	} else {
		$("#b7").value = "0";
		$("#b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		$("#b8").value = "X";
		$("#b8").disabled = true;
		flag = 0;
	} else {
		$("#b8").value = "0";
		$("#b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		$("#b9").value = "X";
		$("#b9").disabled = true;
		flag = 0;
	} else {
		$("#b9").value = "0";
		$("#b9").disabled = true;
		flag = 1;
	}
}
