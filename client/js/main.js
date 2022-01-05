const clubs_table = document.querySelector("#clubs_table");

window.onload = (event) => {
	// Browser assumes that '/clubs' is URL from which website got pulled
	fetch('/clubs').then(res => {
		// Because text of response is a 'Promise':
		res.text().then((data) => {
			data = data.split('\n');
			console.log(data);
			console.log(typeof(data));
			// Headers
			data[0].split(',').forEach(h => console.log(h));

			console.log("---------------------");

			// Club's Data
			data.slice(1,data.length).forEach(row => {
				row.split(',').forEach(piece => {
					console.log(piece);
				});
				console.log("----");
			});
		});
	});
};