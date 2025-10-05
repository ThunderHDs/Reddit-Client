## Project Summary
# Project Requirements:
Build the application using React and Redux

- Version control your application with Git and host the repository on GitHub ✅

- Use a project management tool (GitHub Projects, Trello, etc.) to plan your work ✅

- Write a README (using Markdown) that documents your project including:
    - Wireframes
    - Technologies used
    - Features
    - Future work

- Write unit tests for your components using Jest and Enzyme ✅

- Write end-to-end tests for your application

- Users can use the application on any device (desktop to mobile)

- Users can use the application on any modern browser

- Users can access your application at a URL

- Users see an initial view of the data when first visiting the app

- Users can search the data using terms ✅

- Users can filter the data based on categories that are predefined ✅

- Users are shown a detailed view (modal or new page/route) when they select an item

- Users are delighted with a cohesive design system

- Users are delighted with animations and transitions

- Users are able to leave an error state

- Get 90+ scores on Lighthouse
    - We understand you cannot control how media assets like videos and images are sent to the client. It is okay to have a score below 90 for Performance if they are related to the media from Reddit.

- OPTIONAL: Get a custom domain name and use it for your application

- OPTIONAL: Set up a CI/CD workflow to automatically deploy your application when the master branch in the repository changes

- OPTIONAL: Make your application a progressive web app

- Prerequisites:
    - HTML
    - CSS
    - JavaScript
    - React
    - Redux
    - Jest and Selenium
    - Git and GitHub
    - Command line and file navigation
    - Wireframing


## Project Technologies
- Frontend: 
    - React
    - Redux
    - HTML
    - CSS
    - Javascript
    - Reddit API

## Reddit API Information
- Undocumented JSON API: https://github.com/reddit-archive/reddit/wiki/JSON
- You can take any Reddit URL, add .json at the end of it, and get JSON. For example, if you want to get the Popular page data in JSON:

        Original URL: https://www.reddit.com/r/popular/
        JSON URL: https://www.reddit.com/r/popular.json

    If you want to search for “cake recipes”:

        Original URL: https://www.reddit.com/search?q=cake%20recipes
        JSON URL: https://www.reddit.com/search.json?q=cake%20recipes

Notice here you didn’t add .json at the end of the URL. You actually added it before the start of the query string. Refer to this article for a breakdown of the structure of a URL.

## To keep in mind
    - The Reddit API will return some user content (comments) in Markdown. You should find a way to display the Markdown in your application.
    - Note: As of July 01, 2023, free use of Reddit APIs is limited to 10 queries per minute. If you begin to hit the rate limit while developing this app, subsequent queries may fail until the timer resets. You’ll need to consider how to address this programmatically.


# Timeline
- First week: 
    - Making the Wireframe - ✅
        I tested making a "Wireframe" of my idea of the site, and figma made me an entire site with react and typescript lol, but I still keep it in mind to use it later.
    - Create Files and run it locally - ✅
        I already created the app, and installed react and redux to use the store management for global states.
    - Create Version Control - ✅
    - Building the components - In proccess, components built, just have to test de API to be sure.
    - Test Reddit API