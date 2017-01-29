$(document).ready(function() {
  // Get the form.
  var form = $('#email_form');

  // Set up an event listener for the contact form.
  $(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
      }).done(function(response) {
        $('.logo').fadeOut();
        $('.copy').fadeOut();
        $('.email').fadeOut();
        $('.social-media').fadeOut();
        $('.teaser').fadeIn();
        $('#pw').fadeIn();
        $('.container').css('background-color', '#000000');
        $('.container').css('background-image', 'none');
      });
    });
});
