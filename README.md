Before trying to do anything, run: npm install

This ensures that the node modules are installed properly. Otherwise, you'll run into errors.

To run the application --> npm start

Install the following dependencies to render properly with npm start:

1. node_modules --> DL'd using "npm install"
2. Materual-UI --> DL'd using "npm install @material-ui/core" Also install picture rendering API for Home--> npm install 
3. npm install material-ui-image
4. npm install --save react-router-dom
5. Set up GitHub Pages using the following link: https://www.youtube.com/watch?v=1Y-PqBH-htk

A few notes about GitHub Pages:
0) To launch the GitHub page initially, run "npm run deploy" --> also used to make changes
   NOTE: There is delay time before the GitHub Webpage updates with changes made & deployed using np run deploy
1) If you use React Router with GitHub Pages, it is essential to use relative base PATH to determine routes to get to the homepage & all other pages --> {process.env.PUBLIC_URL + '/'} <-- apply these changes to all routes that run to the HomePage (i.e. NavBar.js & App.js)
   --> Refer to https://github.com/facebook/create-react-app/issues/1765 Gaearon's Post for more about ReactRouter x GHubPage Issue
2)Using Console.Log() is key for testing whether or not the new web pages have been uploaded onto GitHub yet or not