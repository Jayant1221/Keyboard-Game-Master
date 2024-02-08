let keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('click', (e) => {
//     key.classList.add('active-key');
// }));
const totalkey = [];
keys.forEach(key => totalkey.push(key));
// console.log(totalkey);
let key = Math.floor(Math.random() * totalkey.length);
// console.log(totalkey[key]);
to_be_guessed = totalkey[key];
to_be_guessed.classList.add('active-key');
// console.log(to_be_guessed);
window.addEventListener('keydown', (e) => {
    let alert = document.querySelector('.alertbox');
    let keyboard = document.querySelector('.keyboard');
    // console.log(e.key);
    if (e.key == to_be_guessed.innerHTML || e.key == to_be_guessed.innerHTML.toLowerCase()) {
        to_be_guessed.classList.remove('active-key');
        key = Math.floor(Math.random() * totalkey.length);
        to_be_guessed = totalkey[key];
        to_be_guessed.classList.add('active-key');
        alert.classList.remove('alert-show');
        keyboard.classList.remove('show-wrong');
    }
    else{
       alert.classList.add('alert-show');
         alert.innerHTML = `<p>Wrong key pressed, you have pressed ${e.key.toUpperCase()} </p>`;
        keyboard.classList.add('show-wrong');
        }
});