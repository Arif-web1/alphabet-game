// function play_game(params) {
//   const screen = document.getElementById("screen");
//   const landing = document.getElementById("landing_page");
//   landing.classList.add("hidden");
//   screen.classList.remove("hidden");
//   const screen_input = document.getElementById("text");

//   const random_word = random_alphabet();
//   screen_input.innerText = random_word;
//   const button_bg = document.getElementById(random_word);
//   button_bg.style.backgroundColor = "orange";
//   button_bg.style.color = "white";
//   const start_game = playing_game_now(random_word);
// }
// // random alphabet
// function random_alphabet(params) {
//   let alphabet_box = [];
//   const all_alphabet = document.querySelectorAll("kbd");
//   // console.log("all_alphabet--->", all_alphabet);

//   for (const element of all_alphabet) {
//     alphabet_box.push(element.innerText);
//   }
//   return alphabet_box[Math.floor(Math.random() * alphabet_box.length)];
// }

// // keyup system

// function playing_game_now(random) {
//   window.addEventListener("keyup", function (event) {
//     const press_word = event.key;
//     // console.log("press_word",press_word)
//     if (press_word == random) {
//       increaseNumber();

//       this.setTimeout(() => {
//         play_game();
//       }, 2000);

//     } else {
//       // const button_bg = document.getElementById(random);
//       // button_bg.style.backgroundColor = "red";
//       // button_bg.style.color = "white";
//       // playing_game_now(random)
//       discrease();
//     }
//   });
// }

// const increaseNumber = () => {
//   const score = document.getElementById("score");
//   const score_update = score.innerText;
//   const final_score = parseFloat(score_update);
//   const increse_score = final_score + 1;
//   score.innerText = increse_score;

// };

// function discrease(params) {
// const score_count=document.getElementById('life');
// const update_score=score_count.innerText;
// const last_score=parseFloat(update_score);
// const remain_score=last_score-1;
// score_count.innerText=remain_score;


// // if (score_count==0) {
// //   const screen=document.getElementById('screen');
// //   console.log(screen);
  
// // } else {
  
// // }
//   // const reslut_show=document.getElementById('result_show');
//   // const update_result=reslut_show.innerText;
//   // console.log(update_result);
  
// }

function play_game() {
  const screen = document.getElementById("screen");
  const landing = document.getElementById("landing_page");
  landing.classList.add("hidden");
  screen.classList.remove("hidden");
  const screen_input = document.getElementById("text");

  // Generate a random alphabet
  const random_word = random_alphabet();
  screen_input.innerText = random_word;

  // Highlight the random key
  const button_bg = document.getElementById(random_word);
  button_bg.style.backgroundColor = "orange";
  button_bg.style.color = "white";

  // Start the keyup event listener
  playing_game_now(random_word);
}

// Generate a random alphabet
function random_alphabet() {
  let alphabet_box = [];
  const all_alphabet = document.querySelectorAll("kbd");

  for (const element of all_alphabet) {
    alphabet_box.push(element.innerText);
  }
  return alphabet_box[Math.floor(Math.random() * alphabet_box.length)];
}

// Keyup system
function playing_game_now(random_word) {
  const keyupListener = function (event) {
    const press_word = event.key;

    if (press_word.toLowerCase() === random_word.toLowerCase()) {
      // Correct key pressed
      increaseNumber();

      // Remove highlight from previous key
      const previous_button = document.getElementById(random_word);
      previous_button.style.backgroundColor = "";
      previous_button.style.color = "";

      // Generate a new random key
      window.removeEventListener("keyup", keyupListener);
      setTimeout(() => play_game(), 500); // Delay for better user experience
    } else {
      // Wrong key pressed
      discrease();
    }
  };

  window.addEventListener("keyup", keyupListener);
}

// Increase score
const increaseNumber = () => {
  const score = document.getElementById("score");
  const score_update = score.innerText;
  const final_score = parseFloat(score_update);
  const increse_score = final_score + 1;
  score.innerText = increse_score;
};

// Decrease life
function discrease() {
  const score_count = document.getElementById("life");
  const update_score = score_count.innerText;
  const last_score = parseFloat(update_score);
  const remain_score = last_score - 1;

  if (remain_score <= 0) {
    // If no lives remain, end the game
    alert("Game Over! Refresh the page to play again.");
    const screen = document.getElementById("screen");
    screen.classList.add("hidden");
    const landing = document.getElementById("landing_page");
    landing.classList.remove("hidden");
    window.removeEventListener("keyup", playing_game_now); // Remove keyup listener
  } else {
    score_count.innerText = remain_score;
  }
}
