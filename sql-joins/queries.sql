-- write your queries here
joins_exercise=# \dt
         List of relations
 Schema |   Name   | Type  | Owner
--------+----------+-------+-------
 public | owners   | table | diana
 public | vehicles | table | diana
(2 rows)




joins_exercise=# SELECT * FROM owners o
  FULL OUTER JOIN vehicles v
    ON o.id=v.owner_id;



joins_exercise=# SELECT first_name, last_name,
  COUNT(owner_id) FROM owners o
  JOIN vehicles v on o.id=v.owner_id
  GROUP BY (first_name, last_name)
ORDER BY first_name;
 first_name | last_name | count
------------+-----------+-------
 Alex       | Miller    |     1
 Bob        | Hope      |     2
 Jane       | Smith     |     2
 Melody     | Jones     |     2
 Sarah      | Palmer    |     3
 Shana      | Smith     |     4
(6 rows)





joins_exercise=# SELECT
  first_name, last_name,
  ROUND(AVG(price)) as average_price,
  COUNT(owner_id)
FROM owners o
JOIN vehicles v on o.id=v.owner_id
GROUP BY
  (first_name, last_name)
HAVING
  COUNT(owner_id) > 1 AND ROUND(AVG(price)) > 10000
ORDER BY first_name DESC;
 first_name | last_name | average_price | count
------------+-----------+---------------+-------
 Shana      | Smith     |         19875 |     4
 Sarah      | Palmer    |         16333 |     3
 Jane       | Smith     |         15000 |     2
(3 rows)

joins_exercise=#