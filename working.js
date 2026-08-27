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
    alert("Thanks for Contact!");
    this.reset();
  })
  .catch((error) => {
    console.log("FAILED...", error);
    alert("Message failed to send.");
  });
});

// Wish funtion
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 17) {
    return "Good Afternoon";
  } else if (hour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}
//Date funtion
function getFormattedDate() {
  const today = new Date();
  return today.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
document.getElementById('greeting').innerHTML = `${getGreeting()}! <br>Welcome to my Web Profile`;
document.getElementById('current-date').textContent = `Today's ${getFormattedDate()}`;

//Time funtion
function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent =
        now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}
updateTime();
setInterval(updateTime, 1000);