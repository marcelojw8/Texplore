function addTable(headers, data) {
	const clubs_table = document.querySelector("#clubs_table");

	let tableHeaderRow = document.createElement('tr');

	headers.forEach(header => {
		let tableHeader = document.createElement('th');
		tableHeader.innerHTML = header;
		tableHeaderRow.append(tableHeader);
	});

	clubs_table.append(tableHeaderRow);

	data.forEach(rawRow => {
		const row = rawRow.split(',');
		let tableDataRow = document.createElement('tr');

		row.forEach(info => {
			let tableData = document.createElement('td');
			tableData.innerHTML = info;
			tableDataRow.append(tableData);
		});
		clubs_table.append(tableDataRow);
	});
}


window.onload = (event) => {
	// Browser assumes that '/clubs' is URL from which website got pulled
	fetch('/clubs').then(res => {
		// Because text of response is a 'Promise':
		res.text().then((data) => {
			data = data.split('\n');
			headers = data[0].split(',');
			data = data.slice(1,data.length)
			addTable(headers, data);
		});
	});
};