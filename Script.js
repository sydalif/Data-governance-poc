// Show username from localStorage
const username = localStorage.getItem('username') || 'User';
document.getElementById('greeting').textContent = `Welcome, ${username}!`;

// Quiz button redirects to quiz.html
document.getElementById('startQuizBtn').addEventListener('click', () => {
  window.location.href = 'quiz.html';
});

// Scroll-based animation trigger
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});
