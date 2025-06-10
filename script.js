// Ah... the screen where all truths appear — numbers, heartbreaks, and questionable math choices
const display = document.querySelector('.screen');

// When fate knocks (or the user taps), we let the number walk into our lives
const insert = (value) => {
  if (display.value === "Error") display.value = ""; // wipe away past mistakes, like a fresh start after heartbreak
  display.value += value; // let it in... just one more number... just like one more text you shouldn't send 😩
};

// When the past is too painful... we erase it all
const resetCalc = () => {
  display.value = ""; // start over, cleanse the soul
};

// Sometimes, all we need is to take one step back — not erase it all, just... one little regret
const deleteLast = () => {
  display.value = display.value.slice(0, -1); // snip the last word before you say too much
};

// The moment of truth. Will it work? Will we crash and burn? The math — like life — is unpredictable.
const calculate = () => {
  try {
    const result = eval(display.value); // trust issues, but we go for it anyway
    display.value = result ?? ""; // if it works, we smile... if not, we pretend like we’re fine
  } catch {
    display.value = "Error"; // ah. betrayal. again.
  }
};

// Keyboard whispers — letting fate type its will onto the screen. Or maybe just some math.
window.addEventListener("keydown", (e) => {
  const key = e.key;

  if (/[\d\+\-\*\/\.\%]/.test(key)) {
    insert(key); // let it enter... like a plot twist
  } else if (key === "Enter") {
    e.preventDefault();
    calculate(); // the climax — will it calculate or collapse?
  } else if (key === "Backspace") {
    deleteLast(); // take a step back. always an option.
  } else if (key === "Escape") {
    resetCalc(); // run. start fresh. new episode.
  }
});
