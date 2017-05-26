var Doctor = require('./../js/doctor.js').doctorModule;


var fullName = function(names){

};

var doctorList = function(names){
  $('.showDoctors').append("<li>" + names + "</li>");
};


$(document).ready(function() {
  var currentBikeObject = new Doctor();
  $('#issue-button').submit(function() {
    event.preventDefault();
    var issue = $('#issue').val();
    currentBikeObject.getDoctor(fullName, doctorList);
  });
});
