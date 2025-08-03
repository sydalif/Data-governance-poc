document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const startBtn = document.getElementById('startBtn');

  usernameInput.focus();

  startBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
      localStorage.setItem('username', username);
      window.location.href = "governance.html";
    } else {
      alert("Please enter your name");
      usernameInput.focus();
    }
  });

  // Optional: submit on Enter key press
  usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      startBtn.click();
    }
  });
});
