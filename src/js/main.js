const $bill = document.getElementById('bill'),
    $people = document.getElementById('people'),
    $tips = document.querySelectorAll('.tip__button'),
    $reset = document.querySelector('.tip__reset'),
    $textErrorPeople = document.getElementById('errorPeople'),
    $textErrorBill= document.getElementById('errorBill'),
    $tipText = document.querySelectorAll('.tip__p--number');

let billValue = 0.0,
    peopleValue = 0.0,
    tipValue = 0.5;    

window.addEventListener('DOMContentLoaded',()=>{
    $bill.addEventListener('input',handleBill)
    
    $people.addEventListener('input',handlePeople)

    $tips.forEach($tip =>{
        $tip.addEventListener('click',handleClick)
    })

  

    $reset.addEventListener('click',resetCalculator)

})

function handleBill(){
    
    if($bill.value == 0) {
        $textErrorBill.innerText = "Can't be zero"
        $bill.style.border = "1.4px solid red";
    }else if($bill.value < 0){
        $textErrorBill.innerText = "Can't be less than zero"
        $bill.style.border = "1.4px solid red";
        $textErrorBill.style.marginLeft = "2rem";
        
    }else{
        $textErrorBill.innerText = ""
        $bill.style.border = "1.4px solid hsl(172, 67%, 45%)";
        $textErrorBill.style.marginLeft = "7rem";
    }
    
    if($bill.value.includes(",")){
        $bill.value = $bill.value.replace(',','.')
    }
    billValue = parseFloat($bill.value)
    console.log(billValue);

    $reset.disabled = false;
    $reset.classList.remove('tip__reset--disabled')
    calculator()
}

function handlePeople(){
    if($people.value == 0) {
        $textErrorPeople.innerText = "Can't be zero"
        $people.style.border = "1.4px solid red";
    }else if($people.value < 0){
        $textErrorPeople.innerText = "Can't be less than zero"
        $people.style.border = "1.4px solid red";
    }else{
        $textErrorPeople.innerText = ""
        $people.style.border = "1.4px solid hsl(172, 67%, 45%)";
    }

    if($people.value.includes(",")){
        $people.value = $people.value.replace(',','.')
    }
    peopleValue = parseFloat($people.value)
    console.log(peopleValue);
}

function handleClick(e){
    $tips.forEach($tip=>{
        $tip.classList.remove("tip__button--active");

        if(e.target == $tip){
            $tip.classList.add("tip__button--active");
            
            tipValue = parseFloat($tip.value)/100;
        }
    })

    console.log(tipValue);
}


function calculator(){
    if(peopleValue >= 1){
        let tipAmount = billValue * tipValue / peopleValue;
        let total = billValue + (tipValue + 1) / peopleValue;
        
        $tipText[0].innerText = `$${tipAmount.toFixed(2)}`;
        $tipText[1].innerText = `$${total.toFixed(2)}`;    
    }
}

function resetCalculator(){
    $reset.classList.add('tip__reset--disabled')
    $people.value = "";
    $bill.value = "";
    $tipText[0].innerText = `$0.00`;
    $tipText[1].innerText = `$0.00`;  
}