document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  let musicPlayed = false;

  // Play music when scroll starts
  window.addEventListener("scroll", () => {
    if (!musicPlayed && window.scrollY > 100) {
      audio.play().then(() => {
        musicPlayed = true;
      }).catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  });

  // Toggle music
  window.toggleMusic = function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };
});
function startMusic() {
  document.getElementById("bg-music").play();
  document.getElementById("start-btn").style.display = "none";
}
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  if (audio.paused) {
    audio.play();
    btn.textContent = "🔊";
  } else {
    audio.pause();
    btn.textContent = "🎵";
  }
}

  function showMessage(index) {
    // Get all message elements
    const fortunes = document.querySelectorAll('.fortune');

    // Hide all messages
    fortunes.forEach(f => f.classList.add('hidden'));

    // Show the selected one
    const selected = document.getElementById('fortune' + index);
    if (selected) {
      selected.classList.remove('hidden');
    }
  }


