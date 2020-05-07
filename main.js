function myFunction() {
	var rows = document.getElementsByClassName("table-1");
	for (var i = 0; i < rows.length; i++) {
		if (i % 2 == 0) {
			rows[i].classList.add("zebraStripe");
		}
	}
	var rows = document.getElementsByClassName("table-2");
	for (var i = 0; i < rows.length; i++) {
		if (i % 2 == 0) {
			rows[i].classList.add("zebraStripe");
		}
	}
}
