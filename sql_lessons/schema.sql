DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS videos;
DROP TABLE IF EXISTS reviews;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255),
	about TEXT,
	created_at DATE,
	updated_at DATE
);

CREATE TABLE videos (
	id SERIAL PRIMARY KEY,
	artist_name VARCHAR(255),
	video_title VARCHAR(255),
	genre VARCHAR(255),
	language VARCHAR(255),
	triggers TEXT,
	upload_date DATE,
	video_length_mins INTEGER,
	url VARCHAR(255)
);

CREATE TABLE reviews (
	id SERIAL PRIMARY KEY,
	thumbs_up BOOLEAN,
	comment VARCHAR(255)
);