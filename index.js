let billinput = document.querySelector(".bill-amount");
let tipsbutton = document.querySelectorAll(".tips");
let tipsAmount = document.querySelector(".tipsAmount");
let totslAmount = document.querySelector(".totslAmount");
let numberOfperson = document.querySelector(".people");
let custom = document.getElementById("custom");
let reset = document.querySelector(".reset")
let alert1 = document.querySelector(".alert")



reset.addEventListener('click', () => {
    totslAmount.innerHTML = ''
    tipsAmount.innerHTML = ''
    billinput.value = '';
    numberOfperson.value = '';
    custom.value = '';
    console.log('hello');
})


tipsbutton.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        const percentage = parseFloat(buttonText) / 100;
        const tipValue = parseFloat(billinput.value) * percentage;

        if (numberOfperson.value === '' || (numberOfperson.value) == 0) {
            numberOfperson.style.border = "1px solid red";
            alert1.innerHTML = `Can't be zero.`;
            return; // Stop further execution
        }
        else {
            numberOfperson.style.border = "";
            alert1.innerHTML = "";
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

    if (numberOfperson.value === '' || (numberOfperson.value) == 0) {
        // alert('Please enter the number of people.');
        numberOfperson.style.border = "1px solid red";
        alert1.innerHTML = `Can't be zero.`;
        return; // Stop further execution
    }
    else {
        numberOfperson.style.border = "";
        alert1.innerHTML = "";
    }

    const total = (parseFloat(billinput.value) + tipValue) / parseFloat(numberOfperson.value);
    totslAmount.innerHTML = total.toFixed(2);
    tipsAmount.innerHTML = tipValue.toFixed(2);
});


