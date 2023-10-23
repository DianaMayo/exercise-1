DROP DATABASE soccer_league;
CREATE DATABASE soccer_league;
\c soccer_league;


CREATE TABLE teams (
id SERIAL PRIMARY KEY,
name VARCHAR(15) NOT NULL,
city VARCHAR(15) NOT NULL
);

CREATE TABLE players (
id SERIAL PRIMARY KEY,
name VARCHAR(15) NOT NULL,
birthday TEXT NOT NULL
team_id INTEGER NOT NULL REFERENCES teams
);


CREATE TABLE season (
id SERIAL PRIMARY KEY,
start DATE
end DATE
);

CREATE TABLE referees (
id SERIAL PRIMARY KEY,
name VARCHAR(15) NOT NULL,
);


CREATE TABLE matches (
id SERIAL PRIMARY KEY,
home_team_id INTEGER NOT NULL REFERENCES teams,
away_team_id INTEGER NOT NULL REFERENCES teams,
date DATE
start_time TEXT
season_id INTEGER NOT NULL REFERENCES season,
head_referee_id INTEGER NOT NULL REFERENCES referees,
assistent_referee_1_id INTEGER NOT NULL REFERENCES referees,
assistent_referee_2_id INTEGER NOT NULL REFERENCES referees
);


CREATE TABLE results (
id SERIAL PRIMARY KEY,
team_id INTEGER NOT NULL REFERENCES teams,
match_id INTEGER NOT NULL REFERENCES matches,
results TEXT,
);

CREATE TABLE goals (
id SERIAL PRIMARY KEY,
player_id INTEGER NOT NULL REFERENCES players,
match_id INTEGER NOT NULL REFERENCES matches,
);

CREATE TABLE lienups (
id SERIAL PRIMARY KEY,
player_id INTEGER NOT NULL REFERENCES players,
match_id INTEGER NOT NULL REFERENCES matches,
team_id INTEGER NOT NULL REFERENCES teams,
);
