# rmorty
FULL STACK APP >| React.JS | Express.js | PostgreSQL | Tailwind.css

CREATE TABLE character(
	id SERIAL PRIMARY KEY,
	character_name VARCHAR(255),
	status VARCHAR(255),
	species VARCHAR(255),
	gender VARCHAR(255),
	image VARCHAR(255),
	username VARCHAR(255),
);

CREATE TABLE character( id serial PRIMARY KEY, character_name VARCHAR(255), status VARCHAR(255), species VARCHAR(255), gender VARCHAR(255), image VARCHAR(255), username VARCHAR ( 255 ) );

CREATE TABLE character( id serial PRIMARY KEY, username VARCHAR ( 50 ) UNIQUE NOT NULL, password VARCHAR ( 50 ) NOT NULL, email VARCHAR ( 255 ) UNIQUE NOT NULL, created_on TIMESTAMP NOT NULL, last_login TIMESTAMP );