let billinput = document.querySelector(".bill-amount");
let tipsbutton = document.querySelectorAll(".tips");
let tipsAmount = document.querySelector(".tipsAmount");
let totslAmount = document.querySelector(".totslAmount");
let numberOfperson = document.querySelector(".people");
let custom = document.getElementById("custom");
let reset = document.querySelector(".reset") 
let alert1=document.querySelector(".alert")

// let bilamount = billinput.addEventListener('keyup', () => {
//     const amount = billinput.value
//     console.log(amount)
// })

// tipsbutton.forEach(button => {
//     button.addEventListener('click', () => {
//         const buttonText = button.textContent;
//         const percentage = parseFloat(buttonText) / 100;
//         const tipValue = parseFloat(billinput.value) * percentage;     
//         const total = (+(billinput.value) + +(tipValue.toFixed(2))) / numberOfperson.value
//         totslAmount.innerHTML = total
//         tipsAmount.innerHTML = tipValue.toFixed(2);
//         console.log(tipValue.toFixed(2))
//     });
// });

reset.addEventListener('click',()=>{
    totslAmount.innerHTML=''
    tipsAmount.innerHTML=''
    billinput.value = '';
    numberOfperson.value = '';
    custom.value='';
    console.log('hello');
})

// custom.addEventListener('keyup',()=>{
//     const input=custom.value
//     const percentage = parseFloat(input) / 100;
//     const tipValue = parseFloat(billinput.value) * percentage;     
//     const total = (+(billinput.value) + +(tipValue.toFixed(2))) / numberOfperson.value
//     totslAmount.innerHTML = total
//     tipsAmount.innerHTML = tipValue.toFixed(2);
//     console.log(tipValue.toFixed(2))
// })





tipsbutton.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        const percentage = parseFloat(buttonText) / 100;
        const tipValue = parseFloat(billinput.value) * percentage;
        
        if (numberOfperson.value === '') {
            numberOfperson.style.border = "1px solid red";
            alert1.innerHTML=`Can't be empty.`;
            return; // Stop further execution
        }
        
        const total = (parseFloat(billinput.value) + tipValue) / parseFloat(numberOfperson.value);
        totslAmount.innerHTML = total.toFixed(2);
        tipsAmount.innerHTML = tipValue.toFixed(2);
    });
});

custom.addEventListener('keyup', () => {
    const input = custom.value;
    const percentage = parseFloat(input) / 100;
    const tipValue = parseFloat(billinput.value) * percentage;

    if (numberOfperson.value === '') {
        // alert('Please enter the number of people.');
        numberOfperson.style.border = "1px solid red";
        alert1.innerHTML=`Can't be empty.`;
        return; // Stop further execution
    }

    const total = (parseFloat(billinput.value) + tipValue) / parseFloat(numberOfperson.value);
    totslAmount.innerHTML = total.toFixed(2);
    tipsAmount.innerHTML = tipValue.toFixed(2);
});

