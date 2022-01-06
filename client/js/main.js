const clubs_table = document.querySelector("#clubs_table");

function createTableHeaders() {
	const headers = ["Nome", "Fundação", "Títulos"];

	let tableHeaderRow = document.createElement('tr');

	headers.forEach(header => {
		let tableHeader = document.createElement('th');
		tableHeader.innerHTML = header;
		tableHeaderRow.append(tableHeader);
	});

	clubs_table.append(tableHeaderRow);
}

function createTableData(clubs) {
	clubs.forEach(club => {
		let tableDataRow = document.createElement('tr');

		let tableNameData = document.createElement('td');
		tableNameData.innerHTML = club.name;
		tableDataRow.append(tableNameData);

		let tableFoundationData = document.createElement('td');
		tableFoundationData.innerHTML = club.foundation;
		tableDataRow.append(tableFoundationData);

		let tableTitlesData = document.createElement('td');
		tableTitlesData.innerHTML = club.titles;
		tableDataRow.append(tableTitlesData);

		clubs_table.append(tableDataRow);
	});
}

window.onload = (event) => {
	// Browser assumes that '/clubs' is URL from which website got pulled
	fetch('/clubs').then(res => {
		// Because text of response is a 'Promise':
		res.text().then((data) => {
			createTableHeaders();
			clubs = JSON.parse(data);
			createTableData(clubs);
		});
	});
};