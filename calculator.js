let screen = document.getElementById('screen');// save this as a reference, not as a class in html

// inside () collects as NodeList, but convert to array of buttons
let buttons = Array.from(document.getElementsByClassName('button')); 

/*Calculator functions*/
/*
function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}
*/
/*Calls appropiate functionn above*/

function operate(operation) {
    return new Function('return ' + operation)();
}
/*
function operate(x, operator, y){
    if(operator == '+'){
        return add(x,y);
    }
    else if(operator == '-'){
        return subtract(x,y);
    }
    else if(operator == '*'){
        return multiply(x,y);
    }
   else if(operator == '/'){
        return divide(x,y);
    }
    else {
        return "Invalid operator. Try again";
    }
}
*/
//let operation = operate('divide', 9, 2);
//console.log(operation);

buttons.map( button => { // for list of arrays
    button.addEventListener('click', (e) => { //add a click
        switch(e.target.innerText){ //give back the label of the clicked button
            // inner Text gets text of an element
            //switch gives it cases for the button switching
            case 'C':
                screen.innerText = '';
                break;
            case '=':
                try{
                    screen.innerText = operate(screen.innerText);
                    console.log(typeof(screen.innerText))
                } catch {
                    screen.innerText = "Error"
                }
                break;
            case '←':
                if (screen.innerText){
                   screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            default:
                screen.innerText += e.target.innerText; //append buttons
        }
    });
});