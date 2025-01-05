function play_game(params) {
  const screen = document.getElementById("screen");
  const landing = document.getElementById("landing_page");
  landing.classList.add("hidden");
  screen.classList.remove("hidden");
  const screen_input = document.getElementById("text");

  const random_word = random_alphabet();
  screen_input.innerText = random_word;
  const button_bg = document.getElementById(random_word);
  button_bg.style.backgroundColor = "orange";
  button_bg.style.color = "white";
  const start_game = playing_game_now(random_word);
}
// random alphabet
function random_alphabet(params) {
  let alphabet_box = [];
  const all_alphabet = document.querySelectorAll("kbd");
  // console.log("all_alphabet--->", all_alphabet);

  for (const element of all_alphabet) {
    alphabet_box.push(element.innerText);
  }
  return alphabet_box[Math.floor(Math.random() * alphabet_box.length)];
}

// keyup system

function playing_game_now(random) {
  window.addEventListener("keyup", function (event) {
    const press_word = event.key;
    console.log("press_word",press_word)
    if (press_word == random) {
      increaseNumber();

      this.setTimeout(() => {
        play_game();
      }, 100);

    } else {
      // const button_bg = document.getElementById(random);
      // button_bg.style.backgroundColor = "red";
      // button_bg.style.color = "white";
      // playing_game_now(random)
    }
  });
}

const increaseNumber = () => {
  const score = document.getElementById("score");
  const score_update = score.innerText;
  const final_score = parseFloat(score_update);
  const increse_score = final_score + 1;
  score.innerText = increse_score;
};
