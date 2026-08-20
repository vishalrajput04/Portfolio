document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

(function () {
  emailjs.init({
    publicKey: "YafjgJ7Wdom3uWua4"
  });
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm(
    "service_0521iog",
    "template_hi0f6qu",
    this
  )
  .then(() => {
    alert("Message sent successfully!");
    this.reset();
  })
  .catch((error) => {
    console.log("FAILED...", error);
    alert("Message failed to send.");
  });
});