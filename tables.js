$.ajax({
    url: '/api',
    method: 'GET'
  }).done(function(response) {
    console.log(response.reservations);
    if (response) {
      var tableSection = $('#tableSection');
      var waitlistSection = $('#waitlistSection');
      for (var i = 0; i < response.reservations.length; i++) {
        var tableDiv = $('<div>').addClass('well');
        var id = response.reservations[i].id;
        tableDiv.append($('<h2>').html("<span class='label label-primary'>1</span>|"));
        tableDiv.append($('<div>').append($('<h4>').text(id)));
        tableSection.append(tableDiv);
      }
      for (var i = 0; i < response.waitlist.length; i++) {
        var tableDiv = $('<div>').addClass('well');
        var id = response.waitlist[i].id;
        tableDiv.append($('<h2>').html("<span class='label label-primary'>1</span>|"));
        tableDiv.append($('<div>').append($('<h4>').text(id)));
        waitlistSection.append(tableDiv);
      }
    }
  });