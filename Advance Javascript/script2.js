//condition ? expr1 : expr2;

function isUserValid(bool){
    return bool;
}
var answer = isUserValid(true) ? "You can enter" : "denied";

var autoAnswer = 
    "Your acc # is " + (isUserValid(false) ? "1234":"not available");

    function moveCommand(direction){
        var whatHappens;
        switch(direction){
            case "forward":
                whatHappens = "you monster";
                break;
            case "back":
                whatHappens = "you alive";
                break;
            case "left":
                whatHappens = "you river";
                break;
            default:
                whatHappens = "please enter valid direction";  
        }
        return whatHappens;
    }
