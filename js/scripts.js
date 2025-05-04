// Toggle mobile navigation menu
document.getElementById('menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  });
  
  // Handle contact form submission
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
    const formMsg = document.getElementById('form-msg');
  
    if (!name || !email || !message) {
      formMsg.textContent = "Please fill out all fields.";
      formMsg.style.color = "red";
      return;
    }
  
    // Simulated form success (replace with real backend logic if needed)
    formMsg.textContent = "Thanks for your message, " + name + "! I'll get back to you soon.";
    formMsg.style.color = "green";
  
    this.reset();
  });

  // Toggle hamburger menu on mobile
document.getElementById("menu-toggle").addEventListener("click", function() {
    // Toggle 'active' class to show/hide navigation links on mobile
    document.querySelector(".nav-links").classList.toggle("active");
  });
  