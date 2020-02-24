# burger

This app allows the user to input a burger into the list of burgers waiting to be devoured, then click the "Devour!" button to move the burger to another column, signaling it has been devoured. This app uses an MVC (model, views, controller) design pattern. It makes use of express handlebars to create html templates as part of the views directory. The app uses a mySQL database to keep track of the burgers and whether or not they have been devoured as well. The app has been deployed to Heroku.

## Usage

No installation required! The user only needs to go to https://blooming-escarpment-01798.herokuapp.com/ to play around with the app.

## Built With

* [Express](https://www.npmjs.com/package/express) - Web framework for Node.
* [Express-handlebars](https://www.npmjs.com/package/express-handlebars) - Handlebars view engine for Express
* [mySQL npm package](https://www.npmjs.com/package/mysql) - Used to connect to mySQL database.
* [mySQL Workbench](https://www.mysql.com/products/workbench/) - Used to manage databases.
* [Heroku](https://www.heroku.com/) - Free cloud platform.
* [JawsDB MySQL](https://elements.heroku.com/addons/jawsdb) - Used to connect mySQL database to Heroku.

## License

MIT License

Copyright (c) 2019 Kyle Jones

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.