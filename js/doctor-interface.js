var Doctor = require('./../js/doctor.js').doctorModule;

var patientIssue = function(issue){

};

var fullName = function(names){

};
var phoneNumber = function(phone){

};

var biography = function(bio){

};

var doctorList = function(names, phoneNumber, biography, doctorList){
  $('.showDoctors').append("<li>" + names + "</li>" + "<li>" + phoneNumber + "</li>" + "<li>" + biography + "</li>" + '<br>' + '<br>');
};


$(document).ready(function() {
  var drObject = new Doctor();
  $('#issue-button').submit(function() {
    event.preventDefault();
    var issue = $('#issue').val();
    drObject.getDoctor(issue, fullName, phoneNumber, doctorList,biography);
  });
});
