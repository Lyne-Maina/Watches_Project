document.addEventListener("DOMContentLoaded", function () {
    // FAQ collapsible logic
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const question = this.parentElement;
            // Close others
            document.querySelectorAll('.faq-question').forEach(q => {
                if (q !== question) q.classList.remove('active');
            });
            // Toggle current
            question.classList.toggle('active');
        });
    });

    // "Ask a Question" button logic
    const askBtn = document.querySelector('.faq .btn');
    if (askBtn) {
        askBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const question = prompt("What would you like to ask?");
            if (question) {
                alert("Thank you for your question! Our team will get back to you soon.");
                // Here you could send the question to your backend/server if needed
            }
        });
    }

    // Testimonials carousel functionality
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-arrow.prev');
    const nextBtn = document.querySelector('.testimonial-arrow.next');
    let current = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Show the first card initially
    showCard(current);

    prevBtn.addEventListener('click', function () {
        current = (current - 1 + cards.length) % cards.length;
        showCard(current);
    });

    nextBtn.addEventListener('click', function () {
        current = (current + 1) % cards.length;
        showCard(current);
    });
});



document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar a");
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});