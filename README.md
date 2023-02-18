# Default-React-Tailwind
Very basic React-Tailwind project that contains some very basic Quality Of Life features. Such as Dark theme switch, cool mouse effects, scroll to the top, loader animation e.t.c. More will be added in the future like basic components and pages to display said components but for the time being this will do!

## Setup

Install the dependancies

`npm install`

Run a local server

`npm run dev`


## Folder Structure

### Assets
Contains all assests you might need like images, vector graphics and so on

### Components
Contains all your different components from buttons to cards to forms and so on

### Context
Contains all the useContext hooks you might need

### Data 
Contains all the static data you might need in your project (assuming you dona't retrive that from a database) in the form of JSON files

### Lib
Is like an implementation if the Facade pattern where we use pure functions to wrap 3rd party libraries that you might need to use like Axios to make HTTP requests, therefore if you ever need to update then you only have to do it in one place

### Pages 
Contains all the different pages (idividual files) in your project for example a page to show all the different type if cards

### Services
Contains the files to integrate with different APIs

### Utils
Contains all the utility functions like formating dates and so on. You want these to be pure funtions ideally.


