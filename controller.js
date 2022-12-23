const Router = require("./router")
const Model = require("./model")

class Controller {

  onHttpRequestEnd(httpRequest, receivedData) {
    self.router.route(httpRequest, receivedData)
  }

  onFactorialFound(result) {
    result.data = self.view.formatResult(result.data, false);
    self.model.sendHttpRes(result);
  }

  onFibSequenceFound(result){
    result.data = self.view.formatResult(result.data, false);
      self.model.sendHttpRes(result);
  }

  onOptionsArrayFilled(optionsArray) {
    let optionsAsString = self.view.formatResult(optionsArray, true);
    self.model.sendHttpRes(optionsAsString);
  }

  init(model, router, view) {
    // store the current 'this' as in callbacks it might not be available
    global.self = this;
    self.model = model;
    self.router = router;
    self.view = view;

    //self.model.bindFibSequenceFound(this.onFibSequenceFound)
    self.model.bindHttpRequestEnd(this.onHttpRequestEnd)
  }
  
}

const controller = new Controller();

function getController(model, router, view) {
  controller.init(model, router, view);
    return controller;
}

module.exports = getController;