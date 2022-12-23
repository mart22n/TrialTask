
class Router {
    init(httpRequestHandlers) {
      this.httpRequestHandlers = httpRequestHandlers;
    }

    /*
      route the POST, GET and OPTIONS requests to corresponding
      methods in Model.httpRequestHandlers array
    */
    route(req, receivedData) {
      return this.httpRequestHandlers[req.method.toLowerCase()](req, receivedData);
    }
}

const router = new Router();

function getRouter(httpRequestHandlers) {
  router.init(httpRequestHandlers);
    return router;
}

module.exports = getRouter;