let billinput = document.querySelector(".bill-amount");
let tipsbutton = document.querySelectorAll(".tips");
let tipsAmount = document.querySelector(".tipsAmount");
let totslAmount = document.querySelector(".totslAmount");

let bilamount = billinput.addEventListener('keyup', () => {
    const amount = billinput.value
    console.log(amount)
})

tipsbutton.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        const percentage = parseFloat(buttonText) / 100;
        const tipValue = parseFloat(billinput.value) * percentage;
        const total = +(billinput.value) + +(tipValue.toFixed(2))
        totslAmount.innerHTML = total
        tipsAmount.innerHTML = tipValue.toFixed(2);
        console.log(tipValue.toFixed(2))
    });
});





