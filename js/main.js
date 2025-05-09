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


// gallery
fetch("./components/gallery.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("gallery").innerHTML = data;
    });


// footer
fetch("./components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

// about
fetch("./components/about.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("about").innerHTML = data;
    });



