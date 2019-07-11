"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

/*Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
}) */

Route.post("/register", "AuthController.register");

Route.post("/authenticate", "AuthController.authenticate");

//Rotas autenticadas: pode utilizar dessa forma ou com group
Route.get("/app", "AppController.index").middleware(["auth"]);

Route.group(() => {
  Route.get("/tweet", "TweetController.index");
  // will create all routes and will ignore edit and create(used to view)
  Route.resource("tweets", "TweetController")
    .apiOnly()
    .except("update");
}).middleware(["auth"]);
