
DROP DATABASE medical_center;
CREATE DATABASE medical_center;
\c medical_center;


CREATE TABLE doctors (
id SERIAL PRIMARY KEY,
name VARCHAR(15) NOT NULL,
speciality VARCHAR(20) NOT NULL
);

CREATE TABLE patients (
id SERIAL PRIMARY KEY,
name VARCHAR(15) NOT NULL,
insurance VARCHAR(20) NOT NULL,
birthday TEXT NOT NULL
);


CREATE TABLE diseases (
id SERIAL PRIMARY KEY,
name VARCHAR(15) NOT NULL,
description TEXT NOT NULL
);


CREATE TABLE visits (
id SERIAL PRIMARY KEY,
doctor_id INTEGER NOT NULL REFERENCES doctors,
patient_id INTEGER NOT NULL REFERENCES patients,
date DATE
);


CREATE TABLE diagnoses (
id SERIAL PRIMARY KEY,
visit_id INTEGER NOT NULL REFERENCES visits,
disease_id INTEGER NOT NULL REFERENCES diseases,
note TEXT
);

INSERT INTO doctors (name, speciality)
VALUES
('Anya', 'cardiology'),
('Mila', 'Pulmonary');

INSERT INTO patients (name, insurance, birthday)
VALUES
('Marina', 'molina health care', '04/06/1965'),
('Anton', 'molina health care', '05/27/1986');