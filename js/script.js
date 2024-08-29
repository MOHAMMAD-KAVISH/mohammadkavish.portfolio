var typed=new Typed(".typing",{
    strings:["","Web Developer","Data Analyst","Coder","Problem Solver"]
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Select all nav links
    const navLinks = document.querySelectorAll('.nav a');

    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});

