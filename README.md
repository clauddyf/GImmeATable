![project logo](https://github.com/clauddyf/GimmeATable/blob/master/app/assets/images/Screenshot%20from%202019-12-26%2013-51-14.png)

# GimmeATable

GimmeATable is a site in which a user can search for a restaurant, reserve a table, and leave a review of that same restaurant. This site is inspired by the website OpenTable

![splash page](https://github.com/clauddyf/GimmeATable/blob/master/app/assets/images/home.png)



## Features
### Search
  
  The search feature allow customers to search for a restaurant by city, available time, available date, and available head count. This allows customers to find their target table without the need to parse through each restaurant.
  
 ![search_box](https://github.com/clauddyf/GimmeATable/blob/master/app/assets/images/searchbox.png)
 The Search Parameter is a class component embedded in the splash and the restaurant index page.
 ![search_code](https://github.com/clauddyf/GimmeATable/blob/master/public/search1.png)
 On the handleSubmit function, when the component mounts, the state is an empty string.  
 The ternary logic states that if the state is still an empty logic on submit, assign it the id 1.
 
 <img align="right" width="450" height="180" src="https://github.com/clauddyf/GimmeATable/blob/master/public/search2.png">
 
 The id corresponds to the location id in the database, and the the location otpion id in the select tag of the html.
 
 Future implementations will include search by restaurant name and real reservation search
  
  
### Reservation
 
 The user is afforded the luxury of reserving a table with the table containter being in a sticky format. Customers have the ease of making a resevation while avoiding time conflicts because of the use of react-datepicker.
 ![reservation_box](https://github.com/clauddyf/GimmeATable/blob/master/app/assets/images/reservations.png)
 
In order to create a reservation, the user would have to first be logged in. On creating a reservation, the handleSubmit function checks to see if the currentUser is null, and if so, it opens the login modal. 

Also, it calls the composeReservation function with the current state as its parameters to, and the redirected the the users profile using the profileRedirect function 

## Technologies
* PostgreSQL
* Ruby on Rails
* React/Redux
* Javascript
* CSS

## Future Implementations
* Style the profile page
* Allow users to leave a star rating that will update each Restaurants rating
* Map API for the User to see where exactly the Restaurant is if they arent familiar with the neighborhood
