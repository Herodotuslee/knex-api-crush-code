# Knex Crush Code : Bus API

![erd image](https://gyazo.com/be1d5d72efe51a194857f5600a28cb4b.png)



**Complete as many of the user stories below as you can:**

* As a user, when I make a GET request to `/buses` I should get back an array of all buses.
* As a user, when I make a GET request to `/buses/:id` I should get back the bus I requested for.
* As a user, when I make a POST request to `/buses` and pass JSON data it should create a new bus based off of the data.
* As a user, when I make a PUT request to `/buses/:id` and pass JSON data it should update the bus matching the id in the route params.
* As a user, when I make a DELETE request to `/buses/:id` and it should delete the bus that matches the id passed.
* As a user, when I make a GET request to `/bus_routes` I should get back an array of all bus_routes.
* As a user, when I make a GET request to `/bus_routes/:id` I should get back the bus_route I requested for.
* As a user, when I make a POST request to `/bus_routes` and pass JSON data it should create a new bus_route based off of the data.
* As a user, when I make a PUT request to `/bus_routes/:id` and pass JSON data it should update the bus_route matching the id in the route params.
* As a user, when I make a DELETE request to `/bus_routes/:id` and it should delete the bus_route that matches the id passed.
* As a user, when I make a GET request to `/bus_stops` I should get back an array of all bus_stops.
* As a user, when I make a GET request to `/bus_stops/:id` I should get back the bus_stop I requested for.
* As a user, when I make a POST request to `/bus_stops` and pass JSON data it should create a new bus_stop based off of the data.
* As a user, when I make a PUT request to `/bus_stops/:id` and pass JSON data it should update the bus_stop matching the id in the route params.
* As a user, when I make a DELETE request to `/bus_stops/:id` and it should delete the bus_stop that matches the id passed.


**STRETCH**
* As a user, when I make a GET request to `/bus_stops/:bus_route_id` I should get back an array of all bus stops that exist along the given bus_route.
* As a user, when I make a GET request to `/bus_routes/:bus_id` I should get back an array of all bus routes that exist along the given bus.
* As a user, when I make a GET request to `/buses/:id/full_info` I should get back an object containing the bus information, an array of bus_route objects, and within those bus_route objects there should be an array of bus_stops for the route.
