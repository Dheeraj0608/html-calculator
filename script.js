const display=document.getElementById("display");

function appendTodisplay(input){
    display.value +=input;

}
function cleardisplay(){
    display.value = "";
}
function calculate(){
    display.value = eval(display.value);
}
document.addEventListener("keydown", function(event) {
    const key = event.key;
    
    if (!isNaN(key)) {
        appendTodisplay(key); // For numbers
    } else if (key === '+') {
        appendTodisplay('+');
    } else if (key === '-') {
        appendTodisplay('-');
    } else if (key === '*') {
        appendTodisplay('*');
    } else if (key === '/') {
        appendTodisplay('/');
    } else if (key === 'Enter') {
        calculate(); // For "=" (Enter key)
        event.preventDefault(); // Prevents form submission in case of Enter key
    } else if (key === 'Escape') {
        cleardisplay(); // For "AC" (Escape key)
    } else if (key === '.') {
        appendTodisplay('.');
    }
});