const express = require('express');
const path = require('path');
const fs = require('fs');

const CLUBS_FILE = path.join(__dirname, "../server/clubs.csv")
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "../client")));

app.get('/', (req, res) => {
	res.sendFile("index.html");
});

app.get('/clubs', (req, res) => {
	var clubs_data = fs.readFileSync(CLUBS_FILE, 'utf-8');
	res.send(clubs_data);
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
})