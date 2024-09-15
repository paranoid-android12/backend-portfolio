document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("age");
    const pastDate = new Date('2004-03-12');

    function updateAge() {
        const currentDate = new Date();
        const diff = currentDate - pastDate;
        const milli = 1000 * 60 * 60 * 24 * 365.25; // Approximation considering leap years
        const year = diff / milli;
        const result = year.toFixed(10);
        element.innerHTML = "I'm " + result + " year-old web developer.";
    }

    // Initial call to display the age immediately when the page loads
    updateAge();

    // Update the age every second (1000 milliseconds)
    setInterval(updateAge, 10);



    const name = document.getElementById("mainName");
    name.addEventListener("click", () => {
        document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
    });

    const home = document.getElementById("home");
    home.addEventListener("click", () => {
        document.querySelector(".home").scrollIntoView({ behavior: "smooth" });
    });

    const about = document.getElementById("about");
    about.addEventListener("click", () => {
        document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
    });

    const skills = document.getElementById("skills");
    skills.addEventListener("click", () => {
        document.querySelector(".skills").scrollIntoView({ behavior: "smooth" });
    });

    const art = document.getElementById("art");
    art.addEventListener("click", () => {
        document.querySelector(".art").scrollIntoView({ behavior: "smooth" });
    });




    const yap = document.getElementById("typewriter");
    const yapR = document.getElementById("typewriterRe");
    const gcfams = document.getElementById("gcfams");
    const acs = document.getElementById("acs");
    const eight = document.getElementById("eight");
    const bread = document.getElementById("bread");

    gcfams.addEventListener("click", () => {
        yap.classList.remove("typewriter");
        void yap.offsetWidth;
        yap.innerHTML = "GC FaMS is a product of our final project for our Application Development class. It is a 'Faculty Profiling and Development Monitoring' web application that features the management of faculty statistics and their career development.";
        yap.classList.add("typewriter");
    });

    
    acs.addEventListener("click", () => {
      yap.classList.remove("typewriter");
      void yap.offsetWidth;
      yap.innerHTML = "It's a web application that I collaborated with my close peer. It's an automated quotation generator for a local company.";
      yap.classList.add("typewriter");
    });

    eight.addEventListener("click", () => {
      yap.classList.remove("typewriter");
      void yap.offsetWidth;
      yap.innerHTML = "An inventory management system we're currently developing for our software development class. It features an automatic receipt generation, point of sale, and offline functionality.";
      yap.classList.add("typewriter");
    });

    bread.addEventListener("click", () => {
      yapR.classList.remove("typewriterRe");
      void yapR.offsetWidth;
      yapR.innerHTML = "Breaddit was my final project for our Object-Oriented Programming class. It's a simple Reddit clone that features user authentication, post creation, and comment section.";
      yapR.classList.add("typewriterRe");
    });







    const triggerDiv = document.getElementById('angularContainer');
    
    triggerDiv.addEventListener('click', () => {
      console.log("Angular is clicked");
      const square = document.getElementById('square');
      square.style.display = square.style.display === 'none' ? 'flex' : 'none';

      const squareR = document.getElementById('squareReact');
      if(squareR.style.display === 'flex') {
        squareR.style.display = squareR.style.display = 'none';
      }
      
      if (square.style.display === 'flex') {
        const contents = document.getElementById('fade');
        contents.style.opacity = '0'; // Ensure it's invisible at first
        contents.classList.add('animate');
    }
    });



    const triggerDivReact = document.getElementById('reactContainer');
    
    triggerDivReact.addEventListener('click', () => {
      const square = document.getElementById('squareReact');
      square.style.display = square.style.display === 'none' ? 'flex' : 'none';

      const squareA = document.getElementById('square');
      if(squareA.style.display === 'flex'){
        squareA.style.display = squareA.style.display = 'none';
      }

      if (square.style.display === 'flex') {
        const contents = document.getElementById('fadeReact');
        contents.style.opacity = '0'; // Ensure it's invisible at first
        contents.classList.add('animate');
    }
    });

    
});
