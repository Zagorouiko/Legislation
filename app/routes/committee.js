import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "http://congress.api.sunlightfoundation.com/committees?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7";
    // var url = "http://congress.api.sunlightfoundation.com/committees?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&chamber=house";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var committees = [];
      responseJSON.results.forEach(function(committee) {
        committees.push(committee);
      });
      return committees;
    });
  }
});