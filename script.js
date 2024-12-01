/* SENDING EMAILS */


// Initialize EmailJS
(function(){
  emailjs.init({
    publicKey: "L432gjMa-o76MZqFP",
  });
})();

document.querySelector('.submit-button').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent form default submission
  
  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send email using EmailJS
  //            "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID"
  emailjs.send("service_eomzgkf", "template_psu18xu", {
    to_email: "hejdyson@gmail.com",
    from_name: name,
    from_email: email,
    message: message,
  })
  .then(function(response) {
    alert('Email sent successfully!');
  }, function(error) {
    alert('Failed to send email: ' + error.text);
  });
});