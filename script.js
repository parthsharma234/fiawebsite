// JavaScript to trigger the animation when scrolling to the testimonials section
document.addEventListener('DOMContentLoaded', function() {
  const testimonialBoxes = document.querySelectorAll('.testimonial-box');

  const revealTestimonials = () => {
      testimonialBoxes.forEach(box => {
          const boxTop = box.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (boxTop < windowHeight - 100) { // Adjust trigger point as needed
              box.classList.add('show');
          }
      });
  };

  window.addEventListener('scroll', revealTestimonials);
  revealTestimonials(); // Trigger the function in case testimonials are already in view on page load
});
