# GoGang

## Description

A MERN stack travel planner web app for friend groups who never know where to go .A collaboratively designed and built project made as part of the completion requirements of the General Assembly Software Engineering Intensive.

### Technologies used

Node
React - Front-end
Express - Back-end
MongoDB - Database
Mongoose - Schema
JSON Web Token - Authentication

### General approach we took

We first designed the wireframe for the entire project. We considered the different views we needed from the front end, and from there, derived the necessary backend routes that would link to the front end. From there, we proceeded to create and test the necessary databases to store information in the back end.

After laying down the complete back-end database functionality, we then proceeded to iterate on that by integrating our front-end react components to call our back-end data. This was the final step for full application integration.

### Installation instructions for dependencies

npm i bcrypt cors dotenv express express-validator jsonwebtoken mongoose uuid @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome axios fetch-jsonp react react-dom react-icons react-router-dom react-scripts web-vitals

### Who are our users, what do they want, and why?

Our users are people who want to collaborate with their friends whom they are going on a trip with. This app will be a quantifiable way for friends to vote on and decide where to go and what to do on a trip. It also serves to store an itinerary of some sort for the to follow along on their holiday. In a way, the app serves these 2 main functions. Iterative additions to the app could include social functions that enable others to follow along and share these trips with others.

### Wireframes – sketches of major views / interfaces in our application

![This is an image](https://i.imgur.com/5Wyjpje.png)

### Descriptions of any unsolved problems or major hurdles your team had to overcome

As it was our first time working collaboratively with others, we ran into communication issues in terms of what was expected from the components that we wanted in our app. This issue was resolved through tactful discussions as well as daily meetings informing each other of our updates on what we have done as well as what we intended to do. Some unsolved problems include the integration of external APIs which were rate limited as well as difficult to access data from. A future change could be to find simpler external APIs or generate the data on the user end.
