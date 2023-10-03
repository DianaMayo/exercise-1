### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
 Python can be used for web development and for a wide range of applications, including scientific purposes. JavaScript is mainly used for web development (front-end and back-end) and for mobile app development.

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.
  dictionary["c"]

- What is a unit test?
Unit testing is a crucial aspect of software development that involves testing individual units or components of code to ensure their proper functioning. It aims to validate that each unit, such as a function or method, works as intended and produces the expected output.Jul 31, 2023

- What is an integration test?
Integration testing is the testing of multiple components in an application to ensure that they work as expected when integrated all together.

- What is the role of web application framework, like Flask?
write applications without writing the low-level codes such as protocols, thread management, etc. 

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
  /foods/pretzel would usually be predefined or categorical as /foods/X could be any possible food. Foods?Type is probably more for search based routing.



- How do you collect data from a URL placeholder parameter using Flask?
request.args 

- How do you collect data from the query string using Flask?
request.url

- How do you collect data from the body of the request using Flask?
request.args.get 

- What is a cookie and what kinds of things are they commonly used for?
Cookies are pieces of data that are tied to a user\computer that will be accessed whenever you visit said website. This could be search history, user preferences, etc

- What is the session object in Flask?
A session is similar to a cookie, as it stores information on a user\computer that is carried over during the course of a browsers life. This can help keep track of constantly updating variables that will be referencable as long as the browser\window remain open. Not affected by refreshes.

- What does Flask's `jsonify()` do?
jsonify will return flask variables\data that need to be turned into the JSON format for frontend API's to consume.