document.addEventListener('DOMContentLoaded', function() {

})

function add() { 
var num1 = document.getElementById('op1').value;  //put in the variables
var num2 = document.getElementById('op2').value;
davidsLib.add(num1, num2, function callback(err, result) {
    if (err) { 
    alert('Not quite. Try Again!');
    }
    else { 
    alert(result);
    }
}
);
} 

function subtract() { 
var num1 = document.getElementById('op1').value;  
var num2 = document.getElementById('op2').value;
davidsLib.subtract(num1, num2, function callback(err, result) {
    if (err){ 
    alert('Not quite. Try Again!');
    } 
    else {
    alert(result);
    }
});
} 

function multiply() { 
var num1 = document.getElementById('op1').value;  
var num2 = document.getElementById('op2').value;
davidsLib.add(num1, num2, function callback(err,result) {
    if (err){ 
    alert('Not quite. Try Again!');
    } 
    else {
    alert(result  + "nice work!");
    }
});
} 

function divide() { 
var num1 = document.getElementById('op1').value;  
var num2 = document.getElementById('op2').value;
davidsLib.add(num1, num2, function callback(err,result) {
    
    if (err){ 
    alert('Not quite. Try Again!');
    } 
    else {
    alert(result  + "nice work!");
    }
});
} 



