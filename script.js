function play_game(params) {
  const screen = document.getElementById("screen");
  const landing = document.getElementById("landing_page");
  landing.classList.add("hidden");
  screen.classList.remove("hidden");
  const screen_input=document.getElementById('text');

const random_word=random_alphabet();
screen_input.innerText=random_word;
  
  console.log(screen_input);
  
}
// random alphabet
function random_alphabet(params) {
    let alphabet_box=[];
    const all_alphabet=document.querySelectorAll('kbd');
    
    
    for (const element of all_alphabet) {
        


    alphabet_box.push(element.innerText);
    }
   

    
        return alphabet_box[Math.floor(Math.random() * alphabet_box.length)];
    

}