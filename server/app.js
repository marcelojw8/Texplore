const express = require('express');
const path = require('path');
const fs = require('fs');

const { Sequelize, Model, DataTypes } = require('sequelize');

const USER = 'root';
const HOST = 'my_postgres';            // Assume container na mesma rede bridge
const DB = 'db_futebol_brasileiro';
const PASSWORD = 'dummy_password';
const PG_PORT = '5432';
const SERVER_PORT = 3000;

const sequelize = new Sequelize(DB, USER, PASSWORD, {
	host: HOST,
	port: PG_PORT,
	dialect: 'postgres',
	logging: false,
});

class Clubs extends Model {}
Clubs.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
	},
	foundation: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
	titles: {
		type: DataTypes.INTEGER,
		allowNull: true,
	}
}, {
	sequelize,
	modelName: 'clubs',
	timestamps: false,
});

const app = express();

app.use(express.static(path.join(__dirname, "../client")));

app.get('/', (req, res) => {
	res.sendFile("index.html");
});

app.get('/clubs', async (req, res) => {
	const clubs = await Clubs.findAll();
	res.send(clubs);
});

app.listen(SERVER_PORT, () => {
	console.log(`Server listening on port ${SERVER_PORT}...`);
});