// menu.js
function initMenu() {
  // Highlight active link
  Array.from(document.querySelectorAll('nav.x4v-menu a')).forEach(a => {
    if (window.location.pathname.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
  // Dark mode toggle
  const darkModeBtn = document.getElementById('darkmode-toggle');
  function setDarkMode(on) {
    document.body.classList.toggle('dark', on);
    localStorage.setItem('darkmode', on ? '1' : '0');
    darkModeBtn.textContent = on ? '☀️' : '🌙';
  }
  darkModeBtn.onclick = () => setDarkMode(!document.body.classList.contains('dark'));
  if (localStorage.getItem('darkmode') === '1') setDarkMode(true);
  // nos2x sign-in/sign-out
  const signinBtn = document.getElementById('signin-btn');
  const signoutBtn = document.getElementById('signout-btn');
  const signinStatus = document.getElementById('signin-status');
  // Restore pubkey from localStorage if present
  window.nostrPubkey = localStorage.getItem('nostrPubkey') || null;
  function updateSignInUI() {
    if (window.nostrPubkey) {
      signinStatus.textContent = 'Signed in: ' + window.nostrPubkey.slice(0, 12) + '...';
      signinBtn.style.display = 'none';
      signoutBtn.style.display = '';
    } else {
      signinStatus.textContent = '';
      signinBtn.style.display = '';
      signoutBtn.style.display = 'none';
    }
  }
  updateSignInUI();
  async function signInWithNos2x() {
    if (window.nostr && window.nostr.getPublicKey) {
      try {
        window.nostrPubkey = await window.nostr.getPublicKey();
        localStorage.setItem('nostrPubkey', window.nostrPubkey);
        updateSignInUI();
      } catch (e) {
        signinStatus.textContent = 'Sign-in failed.';
      }
    } else {
      signinStatus.textContent = 'nos2x extension not found.';
    }
  }
  function signOutNos2x() {
    window.nostrPubkey = null;
    localStorage.removeItem('nostrPubkey');
    updateSignInUI();
  }
  signinBtn.onclick = signInWithNos2x;
  signoutBtn.onclick = signOutNos2x;
} 