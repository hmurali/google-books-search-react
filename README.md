# google-books-search-react
## Overview
React-based Google Books Search app. This SPA (Single Page Application) uses [`react-router-dom`] to navigate, hide, and show your React components without changing the route within Express. Using helper/util functions and React lifecycle methods to query and display books based on user searches, this is a full MERN stack application that allows users to save books to a database to refer to at a later date. Built with Node, Express, and MongoDB, and React-Toastify for custom alerts. Toasty!

## Required npm packages
`mongoose`, `axios`, `react-router-dom`, `react-toastify`

## Database
1. Connect to a MongoDB database named `googlebooks` using the mongoose npm package. </li>
2. Using mongoose, create a Book schema. </li>
3. Each book should have the following fields:
      * `Title` - Title of the book from the Google Books API </li>
      * `Authors` - The books' author(s) as returned from the Google Books API </li>
      * `Description` - The book's description as returned from the Google Books API </li>
      * `Image` - The Book's thumbnail image as returned from the Google Books API </li>
      * `Link` - The Book's information link as returned from the Google Books API </li>
      * ***Example JSON:***
         ```js
         {
           authors: ["Suzanne Collins"]
           description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
           image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
           link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
           title: "The Hunger Games"
         }
         ```
## Technologies Implemented
* Bootstrap </li>
* Express </li>
* Node.js </li>
* React </li>
* MongoDB </li>
* Heroku </li>

## Live App
1. Deployed: </li>
