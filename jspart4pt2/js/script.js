var x =5;

//if (x >2) {
//    console.log("x is greater than 2")
//}
//else {
//    console.log("x is less than 2 ")
//}


if (x >2) {
    console.log("x is greater than 2")
}
else if(x<2){
    console.log("x is less than 2 ")
}
else {
    ("x is 2")
}

var input = document.getElementById('input_id')
var button = document.getElementById('btn_id')
var text = document.getElementById('text_id')

button.onclick = function() {
    text.innerHTML = input.value;
}
