// Form submission feedback handler
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form[action*="formspree"]');

  forms.forEach(form => {
    form.addEventListener('submit', function() {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    });
  });

  // Check URL params for Formspree redirect (after successful submission)
  const params = new URLSearchParams(window.location.search);
  if (params.has('success')) {
    showFormMessage('newsletter-message', 'Thank you! Check your email to confirm.', 'success');
    showFormMessage('about-newsletter-message', 'Thank you! Check your email to confirm.', 'success');
    showFormMessage('courses-newsletter-message', 'Thank you! Check your email to confirm.', 'success');
    showFormMessage('resources-newsletter-message', 'Thank you! Check your email to confirm.', 'success');
    showFormMessage('form-message', 'Thank you for reaching out! We\'ll be in touch soon.', 'success');
    
    // Clean URL
    window.history.replaceState({}, document.title, window.location.pathname);
  }
});

function showFormMessage(elementId, message, type) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = message;
    element.style.display = 'block';
    element.style.backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da';
    element.style.color = type === 'success' ? '#155724' : '#721c24';
    element.style.borderColor = type === 'success' ? '#c3e6cb' : '#f5c6cb';
    element.style.border = '1px solid';
  }
}
