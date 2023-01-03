
//let firstname = "chinedu";
//let age = "01";
//let student = true;
//
//console.log(firstname);
//console.log(age)
//console.log(student)
window.alert("Hello.....I like coding")

function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("container_InputNumber").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    
    }
    document.getElementById("demo").innerHTML = text;
}

