$(document).ready(function() {
  // Get the form.
  var form = $('#email_form');

  // Set up an event listener for the contact form.
  $(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    if ($('#email').val() !== '') {
      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      }).done(function(response) {
        $('#email').val('');
        alert("Thank you!");
      });
    }
  });
});
