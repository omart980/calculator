let screen = document.getElementById('screen');
// NodeList -> to array of buttons
let buttons = Array.from(document.getElementsByClassName('button')); 
var calculated = false; // keeps track of calculated state

function operate(operation) {
    return new Function('return ' + operation)();
}

buttons.map(button => { // for list of arrays
    button.addEventListener('click', (e) => { //add a click
        var clickedButton = e.target.innerText;

        //if calculated, clear the display and reset the state
        if ( calculated ) {
            screen.innerText = "";
            calculated = false;
        }

        if(clickedButton === '=') {
            try{
                if(screen.innerText !== "") {
                    //calculate and show the answer to display
                    screen.innerText = operate(screen.innerText);
                    calculated = true;
                }
            }
            catch{
                screen.innerText = "Invalid operation";
                calculated = true;
            }
        }
        else if (clickedButton === 'C') {
            screen.innerText = "";
        }
        else if (clickedButton === '←'){
            screen.innerText = screen.innerText.slice(0, -1);
        }
        else {
            screen.innerText += clickedButton;
        }
    });
});