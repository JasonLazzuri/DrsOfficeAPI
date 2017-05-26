var apiKey = require('./../.env').apiKey;


function Doctor(){

}

Doctor.prototype.getDoctor = function(issue, fullName, phoneNumber, doctorList, biography){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ issue +'&location=WA&user_location=47.470379%2C-122.346794&sort=distance-asc&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    var list = response.data;
      list.forEach(function(list) {
        officeName = fullName(list.practices[0].name);
        officeNumber = phoneNumber(list.practices[0].phones[0].number);
        officebio = biography(list.profile.bio);
        office = doctorList(list.practices[0].name,list.practices[0].phones[0].number,list.profile.bio);
        });

  }).fail(function(error) {
    $('.showStolenLocation').text(error.responseJSON);
  });
};



exports.doctorModule = Doctor;
