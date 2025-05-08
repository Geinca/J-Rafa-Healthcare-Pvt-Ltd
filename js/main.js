// navbar
fetch("./components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    });


// hero
fetch("./components/hero.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("hero").innerHTML = data;
    });

// counter
fetch("./components/counter.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("counter").innerHTML = data;
    });


// services
fetch("./components/services.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("services").innerHTML = data;
    });


// footer
fetch("./components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

// counter animation
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});

// about
fetch("./components/about.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("about").innerHTML = data;
    });


// doctors
fetch("./components/team.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("team").innerHTML = data;
    });


