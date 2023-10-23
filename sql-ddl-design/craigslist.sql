
DROP DATABASE craigslist;
CREATE DATABASE craigslist;
\c craigslist;


CREATE TABLE region (
id SERIAL PRIMARY KEY,
name VARCHAR(15) NOT NULL
);

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(15) NOT NULL,
password VARCHAR(20) NOT NULL,
preferred_region_id INTEGER NOT NULL REFERENCES region,
);


CREATE TABLE categories (
id SERIAL PRIMARY KEY,
name VARCHAR(15) NOT NULL
);


CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title VARCHAR(15) NOT NULL,
text VARCHAR(50) NOT NULL
location TEXT NOT NULL
region_id INTEGER NOT NULL REFERENCES region,
user_id INTEGER NOT NULL REFERENCES users,
category_id INTEGER NOT NULL REFERENCES categories
);



