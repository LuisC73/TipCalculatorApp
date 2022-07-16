const $bill = document.getElementById('bill'),
    $people = document.getElementById('people'),
    $tips = document.querySelectorAll('.tip__button'),
    $reset = document.getElementById('reset'),
    $textErrorPeople = document.getElementById('errorPeople'),
    $textErrorBill= document.getElementById('errorBill');

console.log("object");

window.addEventListener('DOMContentLoaded',()=>{
    $bill.addEventListener('change',() =>{
        if($bill.value == 0) {
            $textErrorBill.innerText = "Can't be zero"
            $bill.style.border = "1px solid red";
        } 
    })
    
    $people.addEventListener('change',() =>{
        if($people.value == 0) {
            $textErrorPeople.innerText = "Can't be zero"
            $people.style.border = "1px solid red";
        } 
    })
})



