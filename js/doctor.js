var apiKey = require('./../.env').apiKey;


function Doctor(){

}

Doctor.prototype.getDoctor = function(issue, fullName){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ issue +'&location=WA&user_location=47.470379%2C-122.346794&sort=distance-asc&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    var list = response.data;
      list.forEach(function(list) {
        officeName = fullName(list.practices[0].name);

        });
console.log(officeName);

      // result = First_last(list.profile.first_name, list.profile.last_name);
      // list.profile.last_name

      // return result;

  }).fail(function(error) {
    $('.showStolenLocation').text(error.responseJSON);
  });
};



exports.doctorModule = Doctor;
