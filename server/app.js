const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "../client")));

app.get('/', (req, res) => {
	res.sendFile("index.html");
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
})