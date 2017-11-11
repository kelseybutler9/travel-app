Travel in Time - a responsive application used to store past, present, and future travel.

##Introduction
Travel in Time allows users to create, update, delete, and view personal trips. The goal of this application is for users to access specific details about each trip.
I found a personal need for this due to my passion for travel. Each trip includes information about the location, dates, transportation, place of residence, restaruants, and actvities. If a user revisits a location, they would be able to reference their past trip for recommendations.
While on a trip, a user can update the details of their trip in real-time. All the user needs to create a trip is a title. If a user plans their trip ahead of time, they can use Travel in Time to view their hotel details or flight itinerary.

##User Stories

Before beginning the implementation of this app, I created high-level user stories for the functionality of the application. These can be seen below.

Screens for the MVP:
1. Home Screen
2. Screen to add a trip to their travel list. (New Trip Screen)
3. Screen to view past trips in travel list. (Past Trips Screen)
4. Screen to update a trip in travel list.  (Update Trip Screen)


Home Screen | Next Screen
-----------------  | ----------------
User selects button to create new trip | New Trip Screen
User selects button to view past trips | Past Trips Screen

New Trip Screen | Next Screen
-----------------  | ----------------
User types in information about trip | inputs are saved down by the system
User selects a button to add new activites, residence, transportation, restaurants | New inputs added to form
User selects view past cities button | Past Trips Search Screen
User submits new trip | Popup success message

Past Trips Screen| Next Screen
-----------------  | ----------------
User select new city trip button | New Trip screen
User selects title of displayed city | Update Trip Screen

Past Trips Details Screen | Next Screen
-----------------  | ----------------
User updates form and submits | popup success message
User selects new activity/restaurant | new inputs added to form

##Add in Screenshots for each

##Technical

This application was built using a variety of languages. HTML, CSS, Javascript, and jQuery were used for the front-end of this project.

The application is fully responsive for all mobile, tablet, and desktop views.

I incorporated Node.js and Mongodb to store all trip information. All testing was performed using Mocha and Chai.

##Enhancements

This is the initial draft of my application. I plan to include a few enhancements below"
1. Search functionality to allow users to search for trips using filters or keywords
2. The ability to view recommended activties, restaraunts, etc while in the application interface.
3. The ability to copy a past trip.
