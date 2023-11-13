const buttons = document.querySelectorAll('.btn');
const body= document.querySelector('body');

buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click',function (e) {
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
    });
});