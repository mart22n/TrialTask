// entry point of app

const Model = require('./model.js');
const Router = require('./router');
const View = require('./view');

const model = new Model();
const router = require('./router')(model.httpRequestHandlers);

const controller = require('./controller') (model, router, new View());